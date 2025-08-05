'use client';

import classes from './Masonry.module.css';
import { Title } from '@mantine/core';
import React, { useState, useEffect } from 'react';


interface MasonryProps {
    text: string;
    title: string;
    images: string[];
}

export default function Masonry({ images, text, title }: MasonryProps) {
    const [isMobile, setIsMobile] = useState(0);
    const [randomColumnIndex, setRandomColumnIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 576 ? 1 : 0);
        };

        setRandomColumnIndex(Math.floor(Math.random() * 2));

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const numColumns = 3;
    const columns: React.ReactElement[][] = Array.from({ length: numColumns }, () => []);
    images.forEach((image, index) => {
        const columnIndex = index % numColumns;
        const imageElement = (
            <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={classes.img}
            />
        );
        columns[columnIndex].push(imageElement);
    });

    const aboutText = <div key="about-text" className={classes.aboutContent}>
        <Title className={classes.aboutContentTitle}>{title}</Title>
        <p>
            {text}
        </p>
    </div>
    columns[isMobile ? 0 : randomColumnIndex].splice(0, 0, aboutText);

    const AboutDesktop = () =>
        <div className={classes.wrapper}>
            {columns.map((columnImages, columnIndex) => (
                <div key={columnIndex} className={classes.column}>
                    {columnImages}
                </div>
            ))}
        </div>

    const AboutMobile = () =>
        <div className={classes.wrapper}>
            <div className={classes.column}>{columns[0]}</div>
        </div>

    return (
        isMobile ? <AboutMobile /> : <AboutDesktop />
    );
}