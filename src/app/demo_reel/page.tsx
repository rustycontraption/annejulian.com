"use client"

import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { urlPrefix } from '../../resources/content';

export default function DemoReel() {
    const [isLoading, setIsLoading] = useState(true);

    const handleReady = () => {
        setIsLoading(false);
    };

    const handleStart = () => {
        setIsLoading(false);
    };

    const handleLoadStart = () => {
        setIsLoading(true);
    };

    const handleError = () => {
        setIsLoading(false);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            maxWidth: '1280px',
            height: 'auto',
            aspectRatio: '16/9',
            margin: '0 auto',
            padding: '0 20px',
            boxSizing: 'border-box'
        }}>
            {isLoading && (
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '10%',
                    width: '80%',
                    height: '80%',
                    backgroundColor: '#000',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        border: '4px solid #333',
                        borderTop: '4px solid #fff',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }}></div>
                </div>
            )}
            <ReactPlayer
                src={`${urlPrefix}demo_reel/FINAL.mp4`}
                muted={true}
                playing={true}
                controls={true}
                width="80%"
                height="80%"
                onReady={handleReady}
                onStart={handleStart}
                onLoadStart={handleLoadStart}
                onError={handleError}
                style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease' }}
            />
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )
}