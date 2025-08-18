import { Container, Title } from "@mantine/core";
import classes from "./WorkSection.module.css";

interface WorkSectionProps {
    title: string;
    children?: React.ReactNode;
}

export default function WorkSection({ title, children }: WorkSectionProps) {
    return (
        <Container className={classes.workWrapper} size="xl">
            <div className={classes.workContent}>
                <Title className={classes.workTitle}>{title}</Title>
                {children}
            </div>
        </Container>
    )
}