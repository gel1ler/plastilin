import React, { useRef, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'
import half from '@/public/falling/half.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Slider from './slider'
import { what } from './data'
import Things from './things'
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
                width: ['100vw', '100vw', '100vw', '1200px'],
                minWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                gap:[8,8,16]
            }}
        >

            <Slider imageRef={imageRef} />
            <Things />
            <Teachers />
        </Box >
    )
}

export default About