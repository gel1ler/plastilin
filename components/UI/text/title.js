import React from 'react'
import { Typography } from '@mui/material'

const Title = ({ children, anim }) => {
    return (
        <Typography data-aos={anim ? 'fade-up' : null} variant="h3">
            {children}
        </Typography>
    )
}

export default Title