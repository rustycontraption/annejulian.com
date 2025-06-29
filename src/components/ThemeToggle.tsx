import { FaMoon, FaSun } from "react-icons/fa";
import cx from 'clsx';
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import classes from './ThemeToggle.module.css';
import Link from 'next/link'

interface ThemeToggleProps {
    children?: React.ReactNode;
    className?: string;
}

export function ThemeToggle({ children, className }: ThemeToggleProps) {
    const { setColorScheme } = useMantineColorScheme();

    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <Link
            onClick={() => {
                setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
            }}
            href={""}
            aria-label="Toggle color scheme"
            className={className}
        >
            <FaSun className={cx(classes.light, classes.icon)} />
            <FaMoon className={cx(classes.icon, classes.dark)} />
            {children}
        </Link>
    );
}