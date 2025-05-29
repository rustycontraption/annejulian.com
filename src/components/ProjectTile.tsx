import { Title } from "@mantine/core";
import classes from "../components/ProjectTile.module.css";

interface ProjectTileProps {
    tileImg: string,
    tileText: string
}

export default function ProjectTile({ tileImg, tileText }: ProjectTileProps) {
    return (
        <div className={classes.tileContainer}>
            <img src={tileImg} className={classes.tileImg} />
            <Title className={classes.tileText}>{tileText}</Title>
        </div>
    )
}