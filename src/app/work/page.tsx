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
                <WorkSection title="professional summary">
                    <div className={classes.tile}>
                        <ul className={classes.arrowList}>
                            {work.prof_summary.map((item, index) => (
                                <li key={index}><span><b>{item.lead}</b> {item.text}</span></li>
                            ))}
                        </ul>
                    </div>
                </WorkSection>
                <WorkSection title="skills & experience">
                    {work.skills.map((item, index) => (
                        <div className={classes.tile} key={index}>
                            <Title className={classes.heading}>{item.heading}</Title>
                            <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }}>
                                {item.list.map((skill, idx) => (
                                    <li key={idx} >{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </WorkSection>
                <WorkSection title="work experience">
                    {work.work_experience.map((item, index) => (
                        <div className={classes.tile} style={{ width: "100%" }} key={index}>
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