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

    return (
        <Box
            id='about'
            sx={{
                overflow: 'hidden',
                width: ['100vw','100vw','100vw','1200px'],

            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplate: '1fr/1fr 1fr',
                    my: 2,
                    gap:2
                }}
            >
                <Box sx={{pl: 2}}>
                    <Title>О нас</Title>
                    <Typography variant='h5' sx={{ mt: 2, fontSize: '23px' }}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
                    </Typography>
                </Box>
                <Image
                    src={isLargeScreen ? kids : halfKids}
                    alt='Фото дети'
                    style={{
                        width: 'min-content',
                        height: 'auto',
                        maxHeight: '400px',
                        objectFit: 'contain',
                        justifySelf: 'end'
                    }}
                />
            </Box>
        </Box>
    )
}

export default About