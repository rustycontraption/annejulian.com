import { Container, Group, Title } from "@mantine/core";
import classes from "./AboutSection.module.css";

interface AboutSectionProps {
    title: string;
    text: string;
    img: string;
}

export default function AboutSection({ title, text, img }: AboutSectionProps) {
    return (
        <Container className={classes.aboutWrapper} size="xl">
            <Group align="flex-start" className={classes.aboutInner}>
                <img className={classes.aboutImg} alt={title} src={img} />
                <div className={classes.aboutContent}>
                    <Title className={classes.aboutTitle}>{title}</Title>
                    <p>
                        {text}
                    </p>
                </div>
            </Group>
        </Container>
    )
}