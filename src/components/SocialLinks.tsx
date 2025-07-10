import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Group, Modal } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import Contact from "../components/Contact"

export default function SocialLinks() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}>
                <Contact />
            </Modal>

            <Group gap={20} visibleFrom="xs">
                <a href="https://github.com/rustycontraption/annejulian.com"><FaGithub size={22} /></a>
                <a href="https://www.linkedin.com/in/annejulian/"><FaLinkedin size={22} /></a>
                <a href="#" onClick={open}><FaEnvelope size={22} /></a>
            </Group>
        </>
    )
}