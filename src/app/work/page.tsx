'use client'

import { Hero } from "@/components/Hero";
import { Container, Title } from "@mantine/core";
import classes from "@/components/Page.module.css";
import { work } from "@/resources/content";
import WorkSection from "@/components/WorkSection";

export default function Work() {
    return (
        <div>
            <Hero>
                <Title className={classes.title}>
                    <i>{`"The only phrase I've ever disliked is, 'Why, we've always done it that way'"`}</i>
                </Title>
                <br />
                <Title className={classes.title} style={{ justifyContent: "right" }}>
                    {`- Grace Hopper`}
                </Title>
            </Hero>
            <div style={{ height: 50 }}></div>
            <Container size="xl" style={{ padding: 0 }}>
                <Title className={classes.title} style={{ justifyContent: "left", marginBottom: "1rem" }}>
                    favorite projects
                </Title>
                <div className={classes.content}>
                    {work.favorite_projects.map((item, index) => (
                        <div className={classes.tile} key={index}>
                            <Title className={classes.heading}>
                                {item.heading}
                            </Title>
                            {item.text}
                        </div>
                    ))}
                </div>
                <WorkSection title="professional summary">
                    <ul className={classes.arrowList}>
                        {work.prof_summary.map((item, index) => (
                            <li key={index}>{item.text}</li>
                        ))}
                    </ul>
                </WorkSection>
                <WorkSection title="work experience">
                    {work.work_experience.map((item, index) => (
                        <div key={index} style={{ marginBottom: "2rem" }}>
                            <Title className={classes.heading}>{item.heading}</Title>
                            <pre>{item.roles}</pre>
                            <br />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </WorkSection>
            </Container>
        </div >
    )
}