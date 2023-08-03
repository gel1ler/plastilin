import React from 'react'
import { Button } from '@mui/material'

const MyButton = () => {
    return (
        <Button
            variant='contained'
            sx={{
                px: 2,
                py: '10px',
                mb: 2
            }}
            data-aos='fade-up'
        >
            Записаться на пробное занятие
        </Button>
    )
}

export default MyButton