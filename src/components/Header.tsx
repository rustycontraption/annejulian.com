'use client'

import { useState } from 'react';
import { Burger, Container, Drawer, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaHome } from 'react-icons/fa';
import classes from './Header.module.css';
import { ThemeToggle } from "../components/ThemeToggle";

const links = [
    { link: '/', label: <FaHome size={22} />, key: 'home' },
    { link: '/about', label: 'About', key: 'about' },
    { link: '/work', label: 'Work', key: 'work' },
];

export default function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.key}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                toggle();
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container fluid size="md">
                <div className={classes.inner}>
                    <div>Anne Julian</div>
                    <Group gap={5} visibleFrom="xs">
                        {items.slice(1)}
                    </Group>
                    <Group gap={2} visibleFrom="xs">
                        {items[0]}
                        <ThemeToggle />
                    </Group>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" aria-label="Toggle navigation menu" />
                </div>
                <Drawer hiddenFrom="xs" position='right' size="25%" opened={opened} onClose={toggle} radius="md" overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}>
                    <Stack gap={5} align='flex-start'>
                        <ThemeToggle />
                        {items[0]}
                        {items.slice(1)}
                    </Stack>
                </Drawer>
            </Container>
        </header >
    );
}