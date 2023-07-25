import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                bgcolor: '#D9D9D9',
                height: '50vh',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '100%'
                }}
            >
                <Box>
                    asdf
                </Box>
                <Typography textAlign='center' >
                    ©2023 Абаничев Александр <br />
                    Все права защищены
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer