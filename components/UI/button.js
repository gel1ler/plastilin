import React from 'react'
import { Button } from '@mui/material'

const MyButton = ({ anim }) => {
    return (
        <Button
            variant='contained'
            sx={{
                p: 2,
                mb: 2,
                width: '90%',
                borderRadius: '15px'
            }}
            data-aos={anim ? 'fade-up' : null}
        >
            Записаться на пробное занятие
        </Button>
    )
}

export default MyButton