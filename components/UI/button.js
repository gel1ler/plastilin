import React from 'react'
import { Button } from '@mui/material'

const MyButton = ({anim}) => {
    return (
        <Button
            variant='contained'
            sx={{
                px: 2,
                py: '10px',
                mb: 2
            }}
            data-aos={anim ? 'fade-up' : null}
        >
            Записаться на пробное занятие
        </Button>
    )
}

export default MyButton