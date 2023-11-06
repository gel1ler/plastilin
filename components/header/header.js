'use client'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { useState, useEffect } from 'react'
import { Menu } from '@mui/icons-material'
import IB from '../UI/IB'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import logo from '../../public/logo/logo-gorizontal.svg'
import Image from 'next/image'
import MyDrawer from './drawer'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from '../icons'
import Link from 'next/link'
import PlaceIcon from '@mui/icons-material/Place'

const Header = ({ main }) => {
    const theme = useTheme()
    const isXLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))
    const [open, setOpen] = useState(false)
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

    if (isXLargeScreen) {
        return (
            <Box
                sx={{
                    left: 0,
                    right: 0,
                    position: 'fixed',
                    bgcolor: 'white',
                    zIndex: 900,
                    transition: 'box-shadow .2s ease-out',
                    height: '90px'
                }}
                className={isActive ? 'shadow' : null}
            >
                <Box
                    sx={{
                        maxWidth: '1200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mx: 'auto'
                    }}
                >
                    <MyDrawer main={main} open={open} setOpen={setOpen} />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            p: 1,
                            gap: 1
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
                            position: 'relative',
                            my: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 'min-content',
                        }}
                    >
                        {main ?
                            <AnchorLink href='#home'>
                                <Image
                                    alt='Логотип детского центра Пластилин'
                                    src={logo}
                                    style={{ objectFit: 'contain', height: '48px', width: 'min-content', display: 'block' }}
                                />
                            </AnchorLink>
                            :
                            <Link href='/'>
                                <Image
                                    alt='Логотип детского центра Пластилин'
                                    src={logo}
                                    style={{ objectFit: 'contain', height: '48px', width: 'min-content', display: 'block' }}
                                />
                            </Link>
                        }
                        <Typography sx={{ fontFamily: 'Intro-Bold', color: 'primary.main', letterSpacing: '2px', gap: '3px', mt: '2px' }} className='centered'>
                            <PlaceIcon fontSize='small' /> Раменское, Свободы 6А
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1,
                            p: 1
                        }}
                    >
                        <PhoneCall icon />
                        <IB f={() => setOpen(true)}><Menu sx={{ fontSize: 30 }} /></IB>
                    </Box>
                </Box>
            </Box>
        )
    }
    else {
        return (
            <Box
                sx={{
                    left: 0,
                    right: 0,
                    position: 'fixed',
                    zIndex: 900,
                    transition: 'box-shadow .2s ease-out',
                    display: 'flex',
                    alignItems: 'center',
                    px: [1, 2, 3, 4],
                    bgcolor: 'white',
                }}
                className={isActive ? 'shadow' : null}
            >
                <MyDrawer main={main} open={open} setOpen={setOpen} />
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'all .2s ease-out',
                        transform: isActive ? 'translateY(-100%)' : null,
                        p: 1,
                        gap: 1
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
                        flexDirection: 'column',
                        // justifyContent: 'center',
                        // alignItems: 'center',
                        height: 'min-content',
                    }}
                >
                    {main ?
                        <AnchorLink href='#home'>
                            <Image
                                alt='Логотип детского центра Пластилин'
                                src={logo}
                                style={{ objectFit: 'contain', height: '35px', width: 'min-content', display: 'block' }}
                            />
                        </AnchorLink>
                        :
                        <Link href='/'>
                            <Image
                                alt='Логотип детского центра Пластилин'
                                src={logo}
                                style={{ objectFit: 'contain', height: '35px', width: 'min-content', display: 'block' }}
                            />
                        </Link>
                    }
                    <Typography sx={{ fontSize: '11px', fontFamily: 'Intro-Bold', color: 'primary.main', letterSpacing: '2px', gap: '3px', mt: '2px' }} className='centered'>
                        <PlaceIcon sx={{ fontSize: '15px' }} /> Раменское, Свободы 6А
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        ml: 'auto',
                        gap: 1,
                        p: 1
                    }}
                >
                    <PhoneCall icon />
                    <IB f={() => setOpen(true)}><Menu sx={{ fontSize: 30 }} /></IB>
                </Box>
            </Box>
        )
    }
}

export default Header