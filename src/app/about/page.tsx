'use client'

import { Hero } from "@/components/Hero";
import { Container, Title, Grid } from "@mantine/core";
import GlitchyText from "@/components/GlitchyText";
import AboutSection from "@/components/AboutSection";
import classes from "@/components/Page.module.css";
import { about } from "@/resources/content";

const items = about.entries.map((entry) => (
    <AboutSection key={entry.title} title={entry.title} text={entry.text} img={entry.img} />
));

export default function About() {
    return (
        <div>
            <Hero>
                <Grid justify="center" align="top">
                    <Grid.Col span={5}><Title className={classes.title} style={{ justifyContent: "right", padding: 0 }}>{`I am `}</Title></Grid.Col>
                    <Grid.Col span={7}>
                        <GlitchyText words={about.words} />
                    </Grid.Col>
                </Grid>
            </Hero>
            <div style={{ height: 50 }}></div>
            <Container className={classes.content} size="xl">
                {items}
            </Container>
        </div>
    )
}