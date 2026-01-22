import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import '../../styles/MacWindow.scss';

const MacWindow = ({ children, title, windowName, setWindowState }) => {
    // 1. Logic to track if we are on mobile
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 2. Dynamic sizing and positioning
    // On mobile, we force the window to the top-left (0,0) and full width/height
    const rndConfig = isMobile ? {
        size: { width: '100%', height: '85vh' },
        position: { x: 0, y: 0 },
        disableDragging: true,
        enableResizing: false
    } : {
        default: {
            x: 100,
            y: 50,
            width: 800,
            height: 500,
        },
        minWidth: 300,
        minHeight: 200,
    };

    return (
        <Rnd
            {...rndConfig}
            bounds="main" // Keeps window inside the <main> tag
            dragHandleClassName="title-bar" // Only the top bar allows dragging
            style={{ zIndex: 10 }}
        >
            <div className="window">
                <div className="title-bar">
                    <div className="dots">
                        <div 
                            className="dot red" 
                            onClick={() => setWindowState(prev => ({ ...prev, [windowName]: false }))}
                        ></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title">{title}</div>
                </div>
                <div className="window-content">
                    {children}
                </div>
            </div>
        </Rnd>
    );
};

export default MacWindow;