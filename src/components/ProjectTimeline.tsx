import { Stack, Timeline } from "@mantine/core"
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
            <pre>{log.text}</pre>
            <div className={classes.img}>
                {log.img && <img src={log.img} className={classes.img} alt={log.text} />}
            </div>
            <div className={classes.img}>
                {log.model && <img src={log.model} className={classes.img} alt={log.text} />}
            </div>
        </Stack >
    );
}

type ProjectTimelineProps = {
    logEntries: ProjectLogItem[];
};


export const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ logEntries }) => {
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
