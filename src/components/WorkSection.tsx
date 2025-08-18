import { Container, Title } from "@mantine/core";
import classes from "./WorkSection.module.css";

interface WorkSectionProps {
    title: string;
    children?: React.ReactNode;
}

export default function WorkSection({ title, children }: WorkSectionProps) {
    return (
        <Container size="xl" style={{ marginBottom: "3rem" }}>
            <Title className={classes.workTitle}>{title}</Title>
            <div className={classes.workContent}>
                {children}
            </div>
        </Container>
    )
}