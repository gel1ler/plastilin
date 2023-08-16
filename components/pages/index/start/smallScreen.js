import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import logo from '../../../../public/logo-gorizontal.svg'
import kids from '../../../../public/start-kids-1.jpg'
import Title from '@/components/UI/title'
import MyButton from '@/components/UI/button'

const SmallScreen = () => {
    return (
        <Box
            id='home'
            className='column-around'
            sx={{
                mt: '70px',
                height: '90svh',
                mx: 'auto',
                minHeight: '580px'
            }}
        >
            <Image
                alt='Логотип'
                src={logo}
                style={{
                    objectFit: 'contain',
                    height: 'min-content',
                    width: '90%',
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
                    width: 'min-content',
                    maxWidth: '500px',
                    maxHeight: '40vh',
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

export default SmallScreen