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
            <Box
                sx={{
                    display: 'grid',
                    gridTemplate: '1fr/50vw 1fr',
                    my: 2,
                    gap: 2
                }}
            >
                <Box sx={{ pl: 2 }}>
                    <Typography data-aos='fade-up' variant='h5'>Характер человека,</Typography>
                    <Typography data-aos='fade-up' sx={{ fontSize: 18 }}>
                        как пластилин. Сначала - мягкий и податливый, но со временем он твердеет и чтобы что-то изменить, приходится ломать форму. Поэтому так важно все закладывать с самого детства.
                    </Typography>
                    <Box
                        sx={{
                            bgcolor: 'secondary.main',
                            px: 2,
                            py: 4,
                            borderRadius: '20px',
                            width: '70%',
                            mt: 5,
                            display: ['none', 'none', 'block']
                        }}
                        data-aos='fade-up'
                    >
                        <Typography data-aos='fade-up' sx={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 23 }}>
                            "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться."
                        </Typography>
                    </Box>
                </Box>
                <Image
                    src={isLargeScreen ? kids : halfKids}
                    alt='Фото дети'
                    style={{
                        width: 'min-content',
                        height: 'auto',
                        maxHeight: isXLargeScreen ? '600px' : '400px',
                        objectFit: 'contain',
                        justifySelf: 'end'
                    }}
                    data-aos='fade-up'
                />
            </Box>
        </Box>
    )
}

export default About