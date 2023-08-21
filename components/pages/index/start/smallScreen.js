import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import logo from '../../../../public/logo-gorizontal.svg'
import kids from '../../../../public/start-circle.png'
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
                    width: 'min-content',
                    maxWidth: '500px',
                    minWidth: '70vw',
                    maxHeight: '40vh',
                }}
            />
            <Box sx={{ my: 2 }}>
                <Typography
                    textAlign='center'
                    sx={{
                        mt: 1,
                        mx: 'auto',
                        width: '90%',
                        fontSize: 25
                    }}
                >

                    <b>Маленький</b> человек - уже большая <b>личность</b>
                </Typography>
                <Typography
                    textAlign='center'
                    sx={{
                        mt: 1,
                        mx: 'auto',
                        width: '90%',
                    }}
                >

                    Дети нашего центра понимают свои и чужие эмоции, осознают их причину.
                </Typography>
            </Box>
            <MyButton />
        </Box>
    )
}

export default SmallScreen