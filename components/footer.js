import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: 'secondary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
                gap: 3,
                py:2,
                width: '100%'
            }}
        >
            <Box>
            </Box>
            <Typography textAlign='center' >
                ©2023 Абаничев Александр <br />
                Все права защищены
            </Typography>
        </Box>
    )
}

export default Footer