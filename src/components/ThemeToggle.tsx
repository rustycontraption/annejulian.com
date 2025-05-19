import { FaMoon, FaSun } from "react-icons/fa";
import cx from 'clsx';
import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import classes from './ThemeToggle.module.css';

export function ThemeToggle() {
    const { setColorScheme } = useMantineColorScheme();

    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <Group justify="center">
            <ActionIcon
                onClick={() => {
                    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
                }}
                variant="transparent"
                size="xl"
                radius="md"
                aria-label="Toggle color scheme"
            >
                <FaSun className={cx(classes.light, classes.icon)} stroke={1.5} />
                <FaMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
            </ActionIcon>
        </Group>
    );
}