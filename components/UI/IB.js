import React from 'react'
import { IconButton } from '@mui/material'
import Link from 'next/link'

const IB = ({ children, f, sx, href, tel }) => {
    const defaultStyle = {
        color: 'black',
    }
    const style = sx ? Object.assign(defaultStyle, sx) : defaultStyle
    return (
        href ?
            <a href={href} target={tel ? 'self' : '_blank'}>
                <IconButton
                    sx={style}
                >

                    {children}
                </IconButton >
            </a>
            :
            <IconButton
                sx={style}
                onClick={f}
            >
                {children}
            </IconButton >
    )
}

export default IB