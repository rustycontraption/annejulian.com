'use client'

import { useState } from 'react';
import Link from 'next/link'
import { Burger, Container, Drawer, Group, Stack, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaHome, FaGithub, FaLinkedin, FaUserCircle, FaDraftingCompass } from 'react-icons/fa';
import classes from './Header.module.css';
import { ThemeToggle } from "../components/ThemeToggle";

const links = [
    { link: '/', icon: <FaHome className={classes.icon} />, drawerLabel: 'Home', key: 'home' },
    { link: '/about', icon: <FaUserCircle className={classes.icon} />, label: 'About', key: 'about' },
    { link: '/work', icon: <FaDraftingCompass className={classes.icon} />, label: 'Work', key: 'work' },
];

export default function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <Link
            key={link.key}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={() => {
                setActive(link.link);
            }}
        >
            {link.icon}
            {link.label}
        </Link>
    ));

    const drawerItems = links.map((link) => (
        <Link
            key={link.key}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={() => {
                setActive(link.link);
            }}
        >
            {link.icon}
            {link.drawerLabel || link.label}
        </Link>
    ))

    return (
        <header className={classes.header}>
            <Container fluid size="md">
                <div className={classes.inner}>
                    <div>
                        <Group gap={20} visibleFrom="xs">
                            <a href="https://github.com/rustycontraption/annejulian.com"><FaGithub size={22} /></a>
                            <a href="https://www.linkedin.com/in/annejulian/"><FaLinkedin size={22} /></a>
                        </Group>
                    </div>
                    <Group gap={5} visibleFrom="xs">
                        {items[0]}
                        <Divider size={1} orientation="vertical" />
                        {items.slice(1)}
                        <Divider size={1} orientation="vertical" />
                        <ThemeToggle />
                    </Group>
                    <div />
                    <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="md" aria-label="Toggle navigation menu" />
                </div>
                <Drawer hiddenFrom="xs" position='right' size="40%" opened={opened} onClose={toggle} radius="md" overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}>
                    <Stack gap={5} align='flex-start'>
                        {drawerItems}
                        <ThemeToggle className={classes.link}>Theme</ThemeToggle>
                    </Stack>
                </Drawer>
            </Container>
        </header >
    );
}