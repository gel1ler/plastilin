import React from 'react'
import { Typography } from '@mui/material'

const Title = ({ children, anim }) => {
    return (
        <Typography data-aos={anim ? 'fade-up' : null} variant="h3">
            <b>{children}</b>
        </Typography>
    )
}

export default Title