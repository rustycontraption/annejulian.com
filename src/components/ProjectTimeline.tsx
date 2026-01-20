import { Group, Timeline } from "@mantine/core"
import classes from "./ProjectTimeline.module.css"
import { useRef, useState, useEffect, useCallback } from "react";
import { ProjectLogItem } from "../resources/content";

interface ProjectItemProps {
    index: number;
    log: ProjectLogItem;
    onVisibilityChange: (index: number, isVisible: boolean) => void;
}

export function ProjectItem({ index, log, onVisibilityChange }: ProjectItemProps) {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                onVisibilityChange(index, entry.isIntersecting);
            },
            {
                threshold: .25,
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
        <Group ref={itemRef} className={classes.logItem}>
            {log.img &&
                <img src={log.img} className={classes.img} alt={log.text} />
            }
            {log.model &&
                <img src={log.model} className={classes.img} alt={log.text} />
            }
            <pre style={{ flex: 1 }}>{log.text}</pre>
        </Group>
    );
}

type ProjectTimelineProps = {
    logEntries: ProjectLogItem[];
};


export const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ logEntries }) => {
    const [activeIndex, setActiveIndex] = useState<number>(1);
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

    const handleVisibilityChange = useCallback((itemIndex: number, isVisible: boolean) => {
        setVisibleItems(prev => {
            const newSet = new Set(prev);
            if (isVisible) {
                newSet.add(itemIndex);
            } else {
                newSet.delete(itemIndex);
            }
            return newSet;
        });
    }, []);

    useEffect(() => {
        if (visibleItems.size > 0) {
            setActiveIndex(Math.max(...Array.from(visibleItems)));
        }
    }, [visibleItems]);

    return (
        <Timeline active={activeIndex} bulletSize={40} className={classes.timeline}>
            {logEntries.map((item, index) => (
                <Timeline.Item key={index} bullet={<></>}>
                    <ProjectItem
                        index={index}
                        log={item}
                        onVisibilityChange={handleVisibilityChange}
                    />
                </Timeline.Item>
            ))}
        </Timeline>
    );
}
