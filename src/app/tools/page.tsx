'use client'

import { Hero } from "@/components/Hero";
import { Container, Title } from "@mantine/core";
import classes from "@/components/Page.module.css";

export default function Tools() {
    return (
        <div>
            <Hero>
                <Title className={classes.title}>
                    {`Tools`}
                </Title>
            </Hero>
            <div style={{ height: 50 }}></div>
            <Container size="xl" style={{ padding: 0 }}>
            </Container>
        </div>
    )
}
