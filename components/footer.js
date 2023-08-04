import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box
            className='column-centered'
            sx={{
                bgcolor: 'secondary.main',
                justifyContent: 'space-between',
                gap: 3,
                py: 2,
                width: '100%'
            }}
        >
            <Box>
            </Box>
            <Typography textAlign='center'>
                ©2023 Абаничев Александр <br />
                Все права защищены
            </Typography>
        </Box>
    )
}

export default Footer