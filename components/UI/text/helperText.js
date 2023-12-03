import { Box, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import React from 'react'

const HelperText = ({ children, arrow, onlySmall }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1, display: onlySmall ? ['flex', 'flex', 'none'] : 'flex' }} data-aos='fade-up'>
            <Typography variant="body1">
                {children}
            </Typography>
            {arrow ? <ArrowRightAltIcon sx={{ opacity: 0.5, fontSize: 15 }} /> : null}
        </Box>
    )
}

export default HelperText