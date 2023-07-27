import React from 'react'
import { IconButton } from '@mui/material'

const IB = ({ children, f, sx }) => {
    const defaultStyle = {
        color: 'black',
    }
    const style = sx ? Object.assign(defaultStyle, sx) : defaultStyle
    return (
        <IconButton
            sx={style}
            onClick={f}
        >
            {children}
        </IconButton >
    )
}

export default IB