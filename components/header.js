'use client'
import { Box, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Instagram, WhatsApp, Telegram, Phone, Menu } from '@mui/icons-material'
import IB from './UI/IB'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import logo from '../public/logo-gorizontal.svg'
import Image from 'next/image'

const Header = () => {
    const [height, setHeight] = useState()
    const [isActive, setIsActive] = useState(false)

    useEffect(() =>
        setHeight(window.innerHeight)
        , [])

    useScrollPosition(({ prevPos, currPos }) => {
        let y = -currPos.y
        if (y >= height * 0.2) {
            setIsActive(true)
        }
        if (y < height * 0.2) {
            setIsActive(false)
        }
    })

    return (
        <Box
            sx={{
                left: 0,
                right: 0,
                position: 'fixed',
                bgcolor: 'white',
                zIndex: 999,
                transition: 'box-shadow .2s ease-out',
                width: '100vw',
            }}
            className={isActive ? 'shadow' : null}
        >
            <Box
                sx={{
                    maxWidth: '1200px',
                    display: 'flex',
                    p: '3px',
                    width: '100vw',
                    // mx: 'auto'
                }}
            >
                
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        transition: 'all .2s ease-out',
                        // transform: isActive ? 'translateX(100%)' : null
                    }}
                >
                    <IB ><Instagram /></IB>
                    <IB><WhatsApp /></IB>
                    <IB><Telegram /></IB>

                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        transition: 'all .4s ease-out',
                        transform: isActive ? null : 'translateY(-200%)',
                        position: 'relative',
                        width: '50%',
                        ml: 1
                    }}
                >
                    <Image
                        src={logo}
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        ml: 'auto',
                    }}
                >
                    <IB><Phone /></IB>
                    <IB><Menu /></IB>
                </Box>
            </Box>
        </Box>
    )
}

export default Header