import { Container } from '@mantine/core';
import classes from './Hero.module.css';
import { GridLines } from './GridBackground';
import { urlPrefix } from "../resources/content"

interface HeroProps {
    currentProject?: string;
    isVideoHeader?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export function Hero({ currentProject, isVideoHeader, children, style }: HeroProps) {
    return (
        <Container className={classes.wrapper} style={{ ...style }} size="xl">
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
            {children}
        </Container>
    );
}

