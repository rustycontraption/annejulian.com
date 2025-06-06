import { Group, Divider, Stack, Timeline } from "@mantine/core"
import classes from "./ProjectTimeline.module.css"
import { useRef, useState, useEffect, useCallback } from "react";

interface LogItemProps {
    index: number;
    logText: string;
    logImg: string;
    onVisibilityChange: (index: number, isVisible: boolean) => void;
}

export function LogItem({ index, logText, logImg, onVisibilityChange }: LogItemProps) {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                onVisibilityChange(index, entry.isIntersecting);
            },
            {
                threshold: .5,
            }
        );

        const currentElement = itemRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
            observer.disconnect();
        };
    }, [index, onVisibilityChange]);

    return (
        <Stack ref={itemRef} className={classes.logItem}>
            {logText}
            <img src={logImg} className={classes.img} />
        </Stack>
    );
}

interface LogEntryData {
    text: string;
    img: string;
}

interface LogProps {
    logEntries: LogEntryData[];
}

export default function ProjectTimeline({ logEntries }: LogProps) {
    const [activeIndex, setActiveIndex] = useState<number>(1);

    const handleVisibilityChange = useCallback((itemIndex: number, isVisible: boolean) => {
        if (isVisible) {
            setActiveIndex(itemIndex);
        }
    }, [setActiveIndex]);

    return (
        <Timeline active={activeIndex} bulletSize={40} className={classes.timeline}>
            {logEntries.map((item, index) => (
                <Timeline.Item key={index} bullet={<></>}>
                    <LogItem
                        index={index}
                        logText={item.text}
                        logImg={item.img}
                        onVisibilityChange={handleVisibilityChange}
                    />
                </Timeline.Item>
            ))}
        </Timeline>
    );
}
