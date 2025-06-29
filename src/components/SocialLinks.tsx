import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Group } from "@mantine/core";

export default function SocialLinks() {
    return (
        <Group gap={20} visibleFrom="xs">
            <a href="https://github.com/rustycontraption/annejulian.com"><FaGithub size={22} /></a>
            <a href="https://www.linkedin.com/in/annejulian/"><FaLinkedin size={22} /></a>
            {/* <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}><FaEnvelope size={22} /></a> */}
        </Group>
    )
}