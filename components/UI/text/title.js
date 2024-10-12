import React from 'react'
import { Typography } from '@mui/material'

const Title = ({ children, anim, centered }) => {
    return (
        <Typography textAlign={centered ? 'center' : 'start'} data-aos={anim ? 'fade-up' : null} variant="h3">
            <b>{children}</b>
        </Typography>
    )
}

export default Title