import React, { useRef, useState, useEffect } from 'react';
import { useMantineTheme } from '@mantine/core';

export interface GridProps extends React.ComponentPropsWithoutRef<'svg'> {
    lineSpacingPx?: number;
    strokeWidth?: number;
}

export function GridLines({
    lineSpacingPx = 40,
    strokeWidth = 0.5,
    ...others
}: GridProps) {

    const svgRef = useRef(null);
    const theme = useMantineTheme();
    const lineColor = theme.colors.dark[6];

    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        const updateDimensions = () => {
            if (svgRef.current) {
                setContainerWidth(svgRef.current.clientWidth);
                setContainerHeight(svgRef.current.clientHeight);
            }
        };

        updateDimensions();

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.target === svgRef.current) {
                    setContainerWidth(entry.contentRect.width);
                    setContainerHeight(entry.contentRect.height);
                }
            }
        });

        if (svgRef.current) {
            resizeObserver.observe(svgRef.current);
        }

        return () => {
            if (svgRef.current) {
                resizeObserver.unobserve(svgRef.current);
            }
        };
    }, []);

    const numVerticalLines = Math.max(0, Math.floor(containerWidth / lineSpacingPx) - 1);
    const numHorizontalLines = Math.max(0, Math.floor(containerHeight / lineSpacingPx) - 1);

    const horizontalLines = [];
    const verticalLines = [];

    for (let i = 1; i <= numHorizontalLines; i++) {
        const y = i * lineSpacingPx;
        horizontalLines.push(
            <line
                key={`h-${i}`}
                x1="0"
                y1={y}
                x2={containerWidth}
                y2={y}
                stroke={lineColor}
                strokeWidth={strokeWidth}
            />
        );
    }

    for (let i = 1; i <= numVerticalLines; i++) {
        const x = i * lineSpacingPx;
        verticalLines.push(
            <line
                key={`v-${i}`}
                x1={x}
                y1="0"
                x2={x}
                y2={containerHeight}
                stroke={lineColor}
                strokeWidth={strokeWidth}
            />
        );
    }

    for (let i = 1; i <= 3; i++) {
        const x = i * 500;
        verticalLines.push(
            <line
                key={`d-${i}`}
                x1={0}
                y1={containerHeight}
                x2={x}
                y2="0"
                stroke={lineColor}
                strokeWidth={strokeWidth}
            />
        );
    }


    return (
        <svg
            aria-hidden
            ref={svgRef}
            viewBox={`0 0 ${containerWidth} ${containerHeight}`}
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            {...others}
        >
            {horizontalLines}
            {verticalLines}
        </svg>
    );
}