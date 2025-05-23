import { Container, Title } from '@mantine/core';
import classes from './Hero.module.css';
import { GridLines } from './GridBackground';

export function Hero() {
    return (
        <Container className={classes.wrapper} size="xl">
            <GridLines className={classes.gridlines} />
            <div className={classes.inner}>
                <Title className={classes.title}>
                    Hi!<br />
                    My name is Annie, and I solve problems.
                </Title>
            </div>
        </Container>
    );
}
