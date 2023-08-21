import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Title from '@/components/UI/title'
import Image from 'next/image'
import kids from '../../../public/cloud-kids.png'
import halfKids from '../../../public/side.png'
import { useTheme } from '@mui/material/styles'

const About = () => {
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))
    const isXLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))

    return (
        <Box
            id='about'
            sx={{
                overflow: 'hidden',
                width: ['100vw', '100vw', '100vw', '1200px'],
                minWidth: '370px'
            }}
        >
            <Box sx={{ pl: 2 }}>
                <Typography data-aos='fade-up' variant='h4' textAlign='center'>Характер человека, как <b>пластилин</b>.</Typography>
                <Typography data-aos='fade-up' sx={{ fontSize: 18, mt: 1 }} textAlign='center'>
                     Сначала - мягкий и податливый, но со временем он твердеет и чтобы что-то изменить, приходится ломать форму. Поэтому так важно все закладывать с самого детства.
                </Typography>
                {/* <Box
                    sx={{
                        bgcolor: 'secondary.main',
                        px: 2,
                        py: 4,
                        borderRadius: '20px',
                        width: '70%',
                        mt: 5,
                    }}
                    data-aos='fade-up'
                >
                    <Typography data-aos='fade-up' sx={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 23 }}>
                        "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться."
                    </Typography>
                </Box> */}
            </Box>
        </Box>
    )
}

export default About