import React from 'react'
import { IconButton } from '@mui/material'

const IB = ({ children }) => {
    return (
        <IconButton
            size='large'
            sx={{
                color: 'rgb(0,0,0)',
                
            }}
        >
            {children}
        </IconButton>
    )
}

export default IB