'use client'
import { Box, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Instagram, Telegram, Phone, Menu } from '@mui/icons-material'
import IB from '../UI/IB'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import logo from '../../public/logo-gorizontal.svg'
import Image from 'next/image'
import Link from 'next/link'
import MyDrawer from './drawer'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { InstagramIcon, TelegramIcon, VkIcon } from '../icons'

const Header = () => {
    const [height, setHeight] = useState()
    const [isActive, setIsActive] = useState(false)
    const [open, setOpen] = useState(false)

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
                display: 'flex',
                alignItems: 'center',
                px: [1, 2, 3, 4]
            }}
            className={isActive ? 'shadow' : null}
        >
            <MyDrawer open={open} setOpen={setOpen} />
            <Box
                sx={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all .2s ease-out',
                    transform: isActive ? 'translateX(-100%)' : null,
                    p: 1,
                    gap: [0, 1]
                }}
            >
                <InstagramIcon />
                <VkIcon />
                <TelegramIcon />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    transition: 'all .4s ease-out',
                    transform: isActive ? null : 'translateY(-200%)',
                    position: 'relative',
                    ml: 2,
                    my: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'min-content',
                }}
            >
                <AnchorLink href='#home'>
                    <Image
                        alt='Логотип'
                        src={logo}
                        style={{ objectFit: 'contain', height: '38px', width: 'min-content', display: 'block' }}
                    />
                </AnchorLink>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    ml: 'auto',
                    gap: [0, 1],
                    p: 1
                }}
            >
                <IB><Phone sx={{ fontSize: [25, 30] }} /></IB>
                <IB f={() => setOpen(true)}><Menu sx={{ fontSize: [25, 30] }} /></IB>
            </Box>
        </Box>
    )
}

export default Header