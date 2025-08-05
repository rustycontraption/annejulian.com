import React from 'react';
import classes from './Masonry.module.css';
import { Title } from '@mantine/core';

interface MasonryProps {
    text: string;
    title: string;
    images: string[];
}

export default function Masonry({ images, text, title }: MasonryProps) {
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

    const randomColumnIndex = Math.floor(Math.random() * 2);
    // const randomPosition = Math.floor(Math.random() * columns[randomColumnIndex].length);
    const aboutText = <div key="about-text" className={classes.aboutText}>
        <Title className={classes.aboutTitle}>{title}</Title>
        <p>
            {text}
        </p>
    </div>
    columns[randomColumnIndex].splice(0, 0, aboutText);

    return (
        <div className={classes.wrapper}>
            {columns.map((columnImages, columnIndex) => (
                <div key={columnIndex} className={classes.column}>
                    {columnImages}
                </div>
            ))}
        </div>
    );
}