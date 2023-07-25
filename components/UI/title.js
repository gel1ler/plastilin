import React from 'react'
import { Typography } from '@mui/material'

const Title = ({ children }) => {
    return (
        <Typography
            variant="h4"
            textAlign='center'
        >
            {children}
        </Typography>
    )
}

export default Title