'use client'

import { Container } from "@mantine/core";
import ProjectTile from "../components/ProjectTile";
import { useState } from "react";
import classes from "../components/ProjectTile.module.css";

const projectTiles = [
  { link: '/rabbit', tileImg: "https://static.annejulian.net/static/img/rabbit/rabbit.png", tileText: "lorem ipsum dolor sit amet", key: 'rabbit' },
  { link: '/miniped', tileImg: "https://static.annejulian.net/static/img/miniped/mastminiped.jpg", tileText: "lorem ipsum dolor sit amet", key: 'miniped' },
  { link: '/dive', tileImg: "https://static.annejulian.net/static/img/dive/mastdive.jpg", tileText: "lorem ipsum dolor sit amet", key: 'dive' },
  { link: '/drone', tileImg: "https://static.annejulian.net/static/img/drone/drone_hero.png", tileText: "lorem ipsum dolor sit amet", key: 'drone' },
  { link: '/gs750', tileImg: "https://static.annejulian.net/static/img/gs750/gs750_hero.png", tileText: "lorem ipsum dolor sit amet", key: 'gs750' }
]

// const [active, setActive] = useState(projectTiles[0].link);

const projects = projectTiles.map((tile) => (
  <ProjectTile
    key={tile.key}
    tileImg={tile.tileImg}
    tileText={tile.tileText}
  // href={tile.link}
  // data-active={active === tile.link || undefined}
  // onClick={(event) => {
  //   event.preventDefault();
  //   setActive(tile.link);
  // }}
  />
));

export default function Home() {
  return (
    <Container className={classes.wrapper} size="xl">
      {projects}
    </Container>
  );
}
