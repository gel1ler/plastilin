import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Info from './Info'

const Item = ({ props }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Info open={open} setOpen={setOpen} props={props} />
            <Box
                bgcolor='white'
                sx={{
                    p: 1,
                    boxShadow: '0 0px 5px 2px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                    minWidth: '170px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}
            >
                <Box className='between'>
                    <Typography
                        sx={{
                            bgcolor: 'secondary.main',
                            width: 'fit-content',
                            py: '2px',
                            px: '4px',
                            borderRadius: '5px'
                        }}
                    >
                        {props.ageTo ? props.ageFrom + '-' + props.ageTo + " лет" : 'От ' + props.ageFrom + " лет"}
                    </Typography>
                    <Typography>
                        {props.timeFrom + '-' + props.timeTo}
                    </Typography>
                </Box>
                <Typography textAlign='center' variant='h6'>
                    {props.name}
                </Typography>
                <Button onClick={() => setOpen(true)} sx={{ mt: 'auto' }}>Подробнее</Button>
            </Box >
        </>
    )
}

export default Item