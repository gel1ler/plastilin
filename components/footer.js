import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box
            className='column-centered'
            sx={{
                bgcolor: 'secondary.main',
                justifyContent: 'space-between',
                gap: 1,
                py: 2,
                width: '100%'
            }}
        >
            <Box>
            </Box>
            <Typography variant='h6' textAlign='center'>
                Детский центр Пластилин
            </Typography>
            <Typography textAlign='center'>
                Раменское, ул. Свободы, 6А
            </Typography>
            <Typography variant='body2' textAlign='center'>
                2023. Все права защищены
            </Typography>
        </Box>
    )
}

export default Footer