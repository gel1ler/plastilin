'use client'
import React, { useEffect, useState, useRef } from 'react'
import Template from '../template'
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import MuiPhone from '@/components/UI/forms/PhoneNumber'
import { getParentByPhoneNumber } from '@/firebase/clientApp'
import Title from '@/components/UI/text/title'
import Image from 'next/image'
import LockIcon from '@mui/icons-material/Lock';

const Index = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    width: '100%',
                    height: 'calc(100vh - 106px)',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '100vw',
                        overflow: 'hidden',
                        height: 'calc(100vh - 106px)',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -100
                    }}
                >
                    <Box
                        sx={{
                            zIndex: 20,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: 'calc(100vh - 106px)',
                            background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, .8), white)'
                        }}
                    />
                    <Image
                        src='/children/video.jpg'
                        fill
                        objectFit='cover'
                        style={{
                            zIndex: 2,
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: '600px',
                        my: 'auto',
                        transform: 'translateY(-50px)',
                    }}
                >
                    <LockIcon sx={{ fontSize: 250 }} />
                    <Title centered>Безопасный доступ к камерам для спокойствия родителей</Title>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: 8,
                    width: '100%',
                    height: 'calc(100vh - 106px)',
                    
                }}
            >
                <Typography variant='h6'>
                    Досутп к камерам напрямую выдет администратор, только когда ребенок пришел. Когда ребенок уходит администратор забирает доступ. Таким образом вы можете быть уверены что только Вы можете смотреть за своими детьми.
                </Typography>
                <Image 
                    src='/children/lap.jpg'
                    width={800}
                    height={600}
                    style={{
                        borderRadius: '20px'
                    }}
                />
            </Box>
        </Box>
    )
}

export default Index