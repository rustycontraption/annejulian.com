import classes from "./Footer.module.css";
import { Container, Group } from "@mantine/core";
import SocialLinks from "../components/SocialLinks";

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <Group>
                    © 2025 Anne Julian
                </Group>
                <Group>
                    <SocialLinks />
                </Group>
            </Container>
        </footer>
    )
}