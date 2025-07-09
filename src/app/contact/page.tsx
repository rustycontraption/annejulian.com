import { Container, Title } from "@mantine/core";
import classes from "../../components/Page.module.css";
import Contact from "../../components/Contact";

export default function ContactPage() {
    return (
        <div>
            <Container className={classes.title}>
                <Contact />
            </Container>
        </div>
    )
}