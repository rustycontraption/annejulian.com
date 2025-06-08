import { Title } from "@mantine/core";
import Link from "next/link";
import classes from "../components/ProjectTile.module.css";

interface ProjectTileProps {
    tileImg: string,
    tileText: string,
    href: string
}

export default function ProjectTile({ tileImg, tileText, href }: ProjectTileProps) {
    return (

        <div className={classes.tileContainer}>
            <Link href={href}>
                <img src={tileImg} className={classes.tileImg} />
                <Title className={classes.tileText}>{tileText}</Title>
            </Link>
        </div >
    )
}