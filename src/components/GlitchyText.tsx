import { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { EffectComposer, Glitch } from '@react-three/postprocessing';
import { Vector2 } from 'three';
import { useMantineColorScheme } from '@mantine/core';

interface GlitchyTextProps {
    words: string[];
}

export default function GlitchyText({ words }: GlitchyTextProps) {
    const minDelay = 1;
    const maxDelay = 2;
    const minDuration = 0.2;
    const maxDuration = 0.6;

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [active, setActive] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const updateDimensions = () => {
            if (canvasRef.current) {
                setContainerWidth(canvasRef.current.clientWidth);
                setContainerHeight(canvasRef.current.clientHeight);
                setWindowWidth(window.innerWidth);
            }
        };

        updateDimensions();

        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (entry.target === canvasRef.current) {
                    setContainerWidth(entry.contentRect.width);
                    setContainerHeight(entry.contentRect.height);
                    setWindowWidth(window.innerWidth);
                }
            }
        });

        const currentRef = canvasRef.current;
        if (currentRef) {
            resizeObserver.observe(currentRef);
        }

        let glitchTimer: NodeJS.Timeout;
        let durationTimer: NodeJS.Timeout;

        const scheduleGlitch = () => {
            const delay = (minDelay + Math.random() * (maxDelay - minDelay)) * 1000;

            glitchTimer = setTimeout(() => {
                setActive(true);
                setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
                const duration = (minDuration + Math.random() * (maxDuration - minDuration)) * 1000;
                durationTimer = setTimeout(() => {
                    setActive(false);
                    scheduleGlitch();
                }, duration);
            }, delay)
        };

        scheduleGlitch();

        return () => {
            if (currentRef) {
                resizeObserver.unobserve(currentRef);
                resizeObserver.disconnect();
            }
            clearTimeout(glitchTimer);
            clearTimeout(durationTimer);
        };
    }, [words]);

    const currentWord = words.length > 0 ? words[currentWordIndex] : '';
    const theme = useMantineColorScheme();
    const fontColor = theme.colorScheme === 'dark' ? '#ffffff' : '#000000';

    return (
        <Canvas orthographic camera={{ zoom: 1 }} ref={canvasRef}>
            <Text
                fontSize={windowWidth < 576 ? 28 : 40}
                fontWeight={800}
                color={fontColor}
                anchorX="left"
                anchorY="top"
                position={[-(containerWidth / 2), (containerHeight / 2), 0]}
                key={currentWord}
                textAlign='left'
                maxWidth={containerWidth}
                overflowWrap='break-word'
            >
                {currentWord}
            </Text>
            <EffectComposer>
                <Glitch
                    strength={new Vector2(0.05, 0.1)}
                    active={active}
                    ratio={0.85}
                />
            </EffectComposer>
        </Canvas>

    );
}