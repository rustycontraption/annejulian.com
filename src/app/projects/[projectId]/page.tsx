'use client'

import { useParams } from 'next/navigation'
import { Hero } from "../../../components/Hero"
import { ProjectTimeline } from "../../../components/ProjectTimeline"
import { projectContent } from "../../../resources/content"
import { Container } from "@mantine/core"
import classes from "../../../components/Page.module.css"


export default function Projects() {
    const params = useParams()
    const currentProject = params.projectId as string;
    const currentProjectContent = projectContent[currentProject];

    const videoHeaderProjects = ["drone", "windshadow"]
    const isVideoHeader = videoHeaderProjects.includes(currentProject)
        ? true
        : false

    return (
        <div>
            <Hero currentProject={currentProject} isVideoHeader={isVideoHeader} />
            <div style={{ height: 50 }}></div>
            <Container className={classes.contentTimeline} size="xl">
                <ProjectTimeline logEntries={currentProjectContent} />
            </Container>
        </div>
    )
}