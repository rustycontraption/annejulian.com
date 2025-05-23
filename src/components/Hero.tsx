import { Container, Title } from '@mantine/core';
import classes from './Hero.module.css';
import { Dots } from './Dots';

export function Hero() {
    return (
        <div>
            <Container className={classes.wrapper} size="xl">
                <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
                <div className={classes.inner}>
                    <Title className={classes.title}>
                        Hi!<br />
                        My name is Annie, and I solve problems.
                    </Title>

                </div>
            </Container>
        </div>
    );
}
