'use client'

import { Hero } from "@/components/Hero";
import { Container, Title, Grid } from "@mantine/core";
import GlitchyText from "@/components/GlitchyText";
import classes from "@/components/Page.module.css";
import { about } from "@/resources/content";
import Masonry from "@/components/Masonry";

const items = about.masonry.map((entry) => (
    <Masonry key={entry.title} text={entry.text} title={entry.title} images={entry.imgs} />
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
            <Container size="xl" style={{ padding: 0 }}>
                {items}
            </Container>
        </div>
    )
}