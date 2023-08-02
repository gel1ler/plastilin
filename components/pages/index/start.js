import React from 'react'
import { Box, Typography, Button, useMediaQuery, IconButton } from '@mui/material'
import Image from 'next/image'
import logo from '../../../public/logo-gorizontal.svg'
import kids from '../../../public/start-kids.jpg'
import Title from '@/components/UI/title'
import MyButton from '@/components/UI/button'
import { useTheme } from '@mui/material/styles'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import arrow from '../../../public/arrow.svg'

const images = [kids]

const Start = () => {
    const theme = useTheme()
    const isXLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))

    console.log(isXLargeScreen)

    if (isXLargeScreen) {
        return (
            <Box
                id='home'
                className='column-centered'
                sx={{
                    height: 'calc(100vh - 70px)',
                    mt: '70px',
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '95%',
                        height: '95%',
                        overflow: 'hidden',
                        borderRadius: '50px',
                        mt: 1
                    }}
                >
                    {images.map((image, key) =>
                        <Image
                            key={key}
                            alt='Стартовое фото дети'
                            src={image}
                            fill
                            style={{
                                objectFit: 'cover',

                            }}
                        />
                    )}
                    <Image
                        src={arrow}
                        style={{
                            height: '100px',
                            width: '100px',
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%) rotate(-180deg)',

                        }}
                    />
                    <Image
                        src={arrow}
                        style={{
                            height: '100px',
                            width: '100px',
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',

                        }}
                    />
                </Box>
            </Box>
        )
    }

    else {
        return (
            <Box
                id='home'
                className='column-around'
                sx={{
                    mt: '70px',
                    height: '90vh',
                    mx: 'auto',
                }}
            >
                <Image
                    alt='Логотип'
                    src={logo}
                    style={{
                        objectFit: 'contain',
                        height: 'min-content',
                        width: '100%',
                        maxWidth: '500px',
                    }}
                />
                <Image
                    alt='Стартовое фото дети'
                    src={kids}
                    style={{
                        objectFit: 'contain',
                        height: 'min-content',
                        borderRadius: '100%',
                        width: '80vw',
                        maxWidth: '500px'
                    }}
                />
                <Box sx={{ my: 2 }}>
                    <Title>Какой-то текст</Title>
                    <Typography textAlign='center' sx={{ mt: 1, width: '70%', mx: 'auto' }}>
                        Давно выяснено, что при оценке дизайна.
                    </Typography>
                </Box>
                <MyButton />
            </Box>
        )
    }
}

export default Start