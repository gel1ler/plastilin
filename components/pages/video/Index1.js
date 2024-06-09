'use client'
import React, { useEffect, useState, useRef } from 'react'
import Template from '../template'
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import MuiPhone from '@/components/UI/forms/PhoneNumber'
import { getParentByPhoneNumber } from '@/firebase/clientApp'

const Index = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [status, setStatus] = useState(100)
    const [loading, setLoading] = useState(false)
    const [isAnimated, setIsAnimated] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                sendPhoneToVerification()
            }
        };
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const sendPhoneToVerification = async (phone) => {
        if (!phone) return;
        setTimeout(() => setLoading(true), 50)
        const parent = await getParentByPhoneNumber(phone)
        if (!parent.childName) {
            setStatus(401) //unauthorized
            console.error('Phone number is not authorized')
            return
        }

        if (!parent.hasCome) {
            setStatus(403) //child did not come
            return
        }

        setStatus(200)
        setVideoUrl("https://open.ivideon.com/embed/v3/?server=100-ie3Abjs0PiQIJvvoCKwROA&camera=0&width=&height=&lang=ru");
        setTimeout(() => setIsAnimated(false), 1010)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '0 auto',
                width: 'fit-content',
                gap: 2,
                flexGrow: 1,
                maxHeight: '70vh',
                overflow: 'hidden',
            }}
        >
            {!isAuth ?
                <>
                    <Typography
                        variant='h6'
                        sx={{
                            transform: loading ? 'translateY(-100vh)' : '',
                            transition: 'transform 1.2s ease-in-out'
                        }}
                    >
                        Введите свой номер телефона для досутпа к камерам
                    </Typography>
                    <MuiPhone
                        sx={{
                            transform: loading ? 'translateY(-100vh)' : '',
                            transition: 'transform 1.4s ease-in-out'
                        }}
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        sendPhoneToVerification={sendPhoneToVerification}
                    />

                    <Box
                        sx={{
                            transform: !loading ? 'translateY(100vh)' : 'translateY(-10vh)',
                            transition: isAnimated ? 'transform 1s ease-in-out' : '',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        {status === 100 ?
                            <>
                                <Typography textAlign='center' variant='h6'>
                                    Получаем данные ...
                                </Typography>
                                <CircularProgress size={50} />
                            </> : null}

                        {status === 401 ?
                            <Typography variant='h6' sx={{ maxWidth: 450 }} textAlign='center'>
                                Вы не зарегистрированны в системе. В случае ошибки, пожалуйста, позвоните нам: <br />  +7 (123) 013-23-92
                            </Typography>
                            : null}

                        {status === 403 ?
                            <Typography variant='h6' sx={{ maxWidth: 450 }} textAlign='center'>
                                Ваш ребенок в данный момент не в детском центре. В этот момент вы не имеете доступа к камерам. В случае ошибки, пожалуйста,  позвоните нам: <br /> +7 (123) 013-23-92
                            </Typography>
                            : null}

                        {status === 200 ?
                            <>
                                <Typography variant='h6' sx={{ maxWidth: 450 }} textAlign='center'>
                                    Доступ разрешен
                                </Typography>
                                Ввод кода из смс
                                <iframe
                                    src={videoUrl}
                                    className="iv-i"
                                    style={{
                                        maxWidth: '100vw',
                                        display: 'block',
                                        margin: 0,
                                        padding: 0,
                                        border: 0,
                                        borderRadius: 10
                                    }}
                                    width="640"
                                    height="360"
                                    allow="autoplay; fullscreen; clipboard-write; picture-in-picture"
                                />

                            </>
                            : null}

                    </Box>
                </>
                :
                "Вы вошли"
            }
        </Box>
    )
}

export default Index