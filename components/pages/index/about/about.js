import React, { useRef, useEffect } from 'react'
import { Box } from '@mui/material'
import Slider from './slider'
import Things from './things/things'
import Teachers from './teachers/teachers'


const About = () => {
    const imageRef = useRef()

    useEffect(() => {
        window.addEventListener('scroll', event => {
            requestAnimationFrame(() => {
                const rotation = window.scrollY / 15
                imageRef.current.style.transform = `rotate(${rotation}deg)`;
            });
        });
    }, []);

    return (
        <Box
            sx={{
                width: '100vw',
                minWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: [8, 8, 16]
            }}
        >
            <Slider imageRef={imageRef} />
            <Things />
            <Teachers />
        </Box >
    )
}

export default About