'use client'
import React, { useState } from 'react'
import Template from '../template'
import { Box, Button, TextField, Typography } from '@mui/material'
import MuiPhone from '@/components/UI/forms/PhoneNumber'

const Index = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')

    const sendPhoneToVerification = () =>{
        
    }

    if (!isAuth) return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '0 auto',
                width: 'fit-content',
                gap:2
            }}
        >
            <Typography variant='h6'>Введите свой номер телефона для досутпа к камерам</Typography>
            <MuiPhone value={phoneNumber} onChange={setPhoneNumber} />
            <Button variant='contained' onClick={sendPhoneToVerification}>
                Отправить
            </Button>
        </Box>
    )
    else return (
        <Box>
            access
        </Box>
    )

}

export default Index