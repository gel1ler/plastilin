import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import logo from '../../../public/logo-gorizontal.svg'
import kids from '../../../public/start-kids.png'
import Title from '@/components/UI/title'

const Start = () => {
    return (
        <Box
            id='home'
            sx={{
                height: '100vh',
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <Box sx={{ pt: '10vh' }}>
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
            </Box>
            <Image
                alt='Стартовое фото дети'
                src={kids}
                style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: 'min-content',
                    borderRadius: '100%',
                    maxWidth: '40vh'
                }}
            />
            <Box sx={{ my: 2 }}>
                <Title>Какой-то текст</Title>
                <Typography textAlign='center' sx={{ mt: 1, width: '70%', mx: 'auto' }}>
                    Давно выяснено, что при оценке дизайна.
                </Typography>
            </Box>
            <Button
                variant='contained'
                sx={{
                    px: 2,
                    py: '10px',
                    mb: 2
                }}
            >
                Записаться на пробное занятие
            </Button>
        </Box>
    )
}

export default Start