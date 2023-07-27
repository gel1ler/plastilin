import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Drawer, Box, useMediaQuery, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import IB from '../UI/IB'
import Link from 'next/link'
import Menu from './menu'

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
                <IB
                    f={() => setOpen(false)}
                    sx={{
                        position: 'absolute',
                        right: 10,
                        top: 10,
                    }}
                >
                    <CloseIcon />
                </IB>
                <Menu close={() => setOpen(false)} />
            </Box>
        </Drawer >
    )
}

export default MyDrawer