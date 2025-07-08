import { Container, Title } from '@mantine/core';
import classes from './Hero.module.css';
import { GridLines } from './GridBackground';
import { urlPrefix } from "../resources/content"

interface HeroProps {
    currentProject?: string;
    isVideoHeader?: boolean;
    title?: string;
}

export function Hero({ currentProject, isVideoHeader, title }: HeroProps) {
    return (
        <Container className={classes.wrapper} size="xl">
            {isVideoHeader ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        left: 0,
                        top: 0,
                        objectFit: 'cover',
                        borderRadius: 10
                    }}
                    src={`${urlPrefix}${currentProject}/videoBg.mp4`}
                />
            ) : <>
                <GridLines className={classes.gridlines} style={{ backgroundImage: `url(${urlPrefix}${currentProject}/hero.webp)` }} />
            </>
            }
            <Title className={classes.title}>
                <pre>{title}</pre>
            </Title>
        </Container>
    );
}

