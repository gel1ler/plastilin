import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import logo from '../../../public/logo-gorizontal.svg'
import kids from '../../../public/start-kids.png'
import Title from '@/components/UI/title'
import MyButton from '@/components/UI/button'

const Start = () => {
    return (
        <Box
            id='home'
            className='column-around'
            sx={{
                height: '100vh',
                mx: 'auto',
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
            <MyButton />
        </Box>
    )
}

export default Start