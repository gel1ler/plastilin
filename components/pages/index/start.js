import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import logo from '../../../public/logo-gorizontal.svg'
import kids from '../../../public/start-kids.png'
import Title from '@/components/UI/title'

const Start = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'center',
                height: '90vh',
                mx: 'auto',
                pt: '10vh',
            }}
        >
            <Image
                src={logo}
                style={{
                    objectFit: 'contain',
                    height: 'min-content',
                    width: '100%',
                    maxWidth: '300px'
                }}
            />
            <Image
                src={kids}
                style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: 'min-content',
                    borderRadius: '100%',
                    margin: '30px 0 30px 0',
                    maxWidth: '300px'
                }}
            />
            <Box>
                <Title>Какой-то текст</Title>
                <Typography textAlign='center' sx={{ mt: 1, width: '70%', mx: 'auto' }}>
                    Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
                </Typography>
            </Box>
            <Button
                sx={{
                    mt: 3,
                    bgcolor: '#59B376',
                    color: 'black',
                    borderRadius: '10px',
                    fontSize: '12px',
                    px: 2,
                    py: '10px'
                }}
            >
                Записаться на пробное занятие
            </Button>
        </Box>
    )
}

export default Start