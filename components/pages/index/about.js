import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Title from '@/components/UI/title'
import Image from 'next/image'
import kids from '../../../public/cloud-kids.png'
import halfKids from '../../../public/cloud-kids-half.png'
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
                height: '90vh'
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplate: '1fr/1fr 1fr',
                    my: 2,
                    gap :2
                }}
            >
                <Box sx={{ pl: 2 }}>
                    <Title>О нас</Title>
                    <Typography data-aos='fade-up' variant='h5' sx={{ mt: 2, fontSize: '23px' }}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
                    </Typography>
                    <Box
                        sx={{
                            bgcolor: 'secondary.main',
                            px: 2,
                            py: 4,
                            borderRadius: '20px',
                            width: '70%',
                            mt:5,
                            display: ['none', 'block']
                        }}
                        data-aos='fade-up'
                    >
                        <Typography data-aos='fade-up' sx={{ fontStyle: 'italic', fontWeight: 'bold', fontSize :23 }}>
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