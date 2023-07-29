import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Drawer, Box, useMediaQuery, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import IB from '../UI/IB'
import Link from 'next/link'
import Menu from './menu'
import { InstagramIcon, VkIcon, TelegramIcon, PhoneIcon, CloseIcon } from '../icons'

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
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
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
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 2
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: [0, 1],

                        }}
                    >
                        <InstagramIcon />
                        <VkIcon />
                        <TelegramIcon />
                    </Box>
                    <Typography color='black' sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                        <a href='tel:+7(916)868-87-88'>+7 (916) 868-87-88</a>
                    </Typography>
                </Box>
            </Box>
        </Drawer >
    )
}

export default MyDrawer