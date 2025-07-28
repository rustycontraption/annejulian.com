'use client'

import { Hero } from "@/components/Hero";
import { Container, Title, Grid } from "@mantine/core";
import GlitchyText from "@/components/GlitchyText";
import AboutSection from "@/components/AboutSection";
import classes from "@/components/Page.module.css";
import { about } from "@/resources/content";


export default function About() {
    console.log(about.words)
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
                <AboutSection />
            </Container>
        </div>
    )
}