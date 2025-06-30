import { Title } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
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
                <Image src={tileImg} className={classes.tileImg} alt={tileText} fill={true} />
                <Title className={classes.tileText}>{tileText}</Title>
            </Link>
        </div >
    )
}