'use client'

import { Container, Title } from "@mantine/core";
import ProjectTile from "../components/ProjectTile";
import { Hero } from "../components/Hero";
import classes from "../components/Page.module.css";
import { projectTiles } from "../resources/content";


const projects = projectTiles.map((tile) => (
  <ProjectTile
    key={tile.key}
    tileImg={tile.tileImg}
    tileText={tile.tileText}
    href={"projects" + tile.link}
  />
));

export default function Home() {
  return (
    <div>
      <Hero>
        <Title className={classes.title}>
          <pre>{`Hi! 
My name is Annie, and I love a challenge.`}
          </pre>
        </Title>
      </Hero>
      <div style={{ height: 50 }}></div>
      <Container className={classes.content} size="xl">
        {projects}
      </Container>
    </div >
  );
}
