import React, { useRef, useEffect } from 'react'
import { Box } from '@mui/material'
import Slider from './slider'
import Things from './things/things'
import Teachers from './teachers/teachers'


const About = () => {
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
            <Slider />
            <Things />
            <Teachers />
        </Box >
    )
}

export default About