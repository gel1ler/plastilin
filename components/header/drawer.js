import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Drawer, Box, useMediaQuery, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import IB from '../UI/IB'
import Link from 'next/link'
import Menu from './menu'
import { InstagramIcon, VkIcon, TelegramIcon, PhoneCall } from '../icons'

const MyDrawer = ({ open, setOpen }) => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Drawer open={open} onClose={() => setOpen(false)} anchor={isSmallScreen ? 'top' : 'right'}>
            <Box
                sx={{
                    width: ['100vw', '60vw', '40vw', '30vw'],
                    height: '100vh',
                    position: 'relative',
                    bgcolor: 'secondary.main',
                    color: 'white',
                }}
            >
                <Box
                    className='column-between'
                    sx={{
                        height: '100svh',
                    }}
                >
                    <IB
                        f={() => setOpen(false)}
                        sx={{
                            position: 'absolute',
                            right: 10,
                            top: 10,
                        }}
                    >
                        <Close sx={{ fontSize: '35px' }} />
                    </IB>
                    <Menu close={() => setOpen(false)} />
                    <Box
                        className='column-centered'
                        sx={{
                            p: 2
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,

                            }}
                        >
                            <InstagramIcon />
                            <VkIcon />
                            <TelegramIcon />
                        </Box>
                        <PhoneCall />
                    </Box>
                </Box>
            </Box>
        </Drawer >
    )
}

export default MyDrawer