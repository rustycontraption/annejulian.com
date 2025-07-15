import { useState, useEffect, useRef } from 'react';
import { Title } from '@mantine/core';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { EffectComposer, Glitch } from '@react-three/postprocessing';
import { Vector2 } from 'three';
import { GlitchMode } from 'postprocessing';

interface GlitchyTextProps {
    words: string[];
}

export default function GlitchyText({ words }: GlitchyTextProps) {
    const minDelay = 1.5;
    const maxDelay = 3.5;
    const minDuration = 0.2;
    const maxDuration = 0.6;

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [active, setActive] = useState(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const updateDimensions = () => {
            if (canvasRef.current) {
                setContainerWidth(canvasRef.current.clientWidth);
            }
            console.log(canvasRef.current);
        };

        updateDimensions();

        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (entry.target === canvasRef.current) {
                    setContainerWidth(entry.contentRect.width);
                }
            }
        });

        const currentRef = canvasRef.current;
        if (currentRef) {
            resizeObserver.observe(currentRef);
        }

        let glitchTimer: NodeJS.Timeout;
        let durationTimer: NodeJS.Timeout;

        const scheduleGlitch = () => {
            const delay = (minDelay + Math.random() * (maxDelay - minDelay)) * 1000;

            glitchTimer = setTimeout(() => {
                setActive(true);
                setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
                const duration = (minDuration + Math.random() * (maxDuration - minDuration)) * 1000;
                durationTimer = setTimeout(() => {
                    setActive(false);
                    scheduleGlitch();
                }, duration);
            }, delay)
        };

        scheduleGlitch();

        return () => {
            if (currentRef) {
                resizeObserver.unobserve(currentRef);
                resizeObserver.disconnect();
            }
            clearTimeout(glitchTimer);
            clearTimeout(durationTimer);
        };
    }, [words]);

    const currentWord = words.length > 0 ? words[currentWordIndex] : '';
    return (
        <Canvas orthographic camera={{ zoom: 1 }} ref={canvasRef} style={{
            position: "relative",
            display: "flex",
            background: "red",
        }}>
            <Text
                fontSize={40}
                fontWeight={800}
                color="white"
                anchorX="left"
                anchorY="middle"
                position={[-(containerWidth / 2), 0, 0]}
                key={currentWord}
                textAlign='left'
            >
                {currentWord}
            </Text>
            <EffectComposer>
                <Glitch
                    strength={new Vector2(0.05, 0.1)}
                    mode={GlitchMode.CONSTANT_WILD}
                    active={active}
                    ratio={0.85}
                />
            </EffectComposer>
        </Canvas>

    );
}