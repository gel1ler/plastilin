import React from 'react'
import { Box, Typography } from '@mui/material'
import Title from '@/components/UI/title'
import Image from 'next/image'
import kids from '../../../public/cloud-kids.png'

const About = () => {
    return (
        <Box
            sx={{
                height: '100vh',
            }}
        >
            <Title>О нас</Title>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplate: '1fr/1fr 1fr',
                    my: 2
                }}
            >
                <Typography>
                    Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
                </Typography>
                <Image
                    src={kids}
                    style={{ objectFit: 'contain', height: 'auto', width: '100%', }}
                />
            </Box>
        </Box>
    )
}

export default About