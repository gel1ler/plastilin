import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Info from './Info'

const bgColors = ['#AECFDF', 'secondary.main', '#93748A', '#59B376', '#274C77']

const Item = ({ props }) => {
    const [open, setOpen] = useState(false)



    return (
        <>
            <Info open={open} setOpen={setOpen} props={props} />
            <Box
                bgcolor='white'
                sx={{
                    p: 2,
                    boxShadow: '0 0px 5px 2px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                    minWidth: '170px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}
            >
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Typography
                        sx={{
                            bgcolor: bgColors[props.ageFrom.slice(0, 1) - 1],
                            color: 'white',
                            width: 'fit-content',
                            py: '2px',
                            px: '4px',
                            borderRadius: '5px'
                        }}
                    >
                        {props.ageTo ? props.ageFrom + '-' + props.ageTo + " лет" : 'От ' + props.ageFrom + (props.ageTo == 4 ? ' года' : " лет")}
                    </Typography>
                    <Typography textAlign='center' variant='h6'>
                        {props.name}
                    </Typography>
                    <Typography sx={{ ml: 'auto' }}>
                        {props.timeFrom + '-' + props.timeTo}
                    </Typography>
                </Box>

                <Button onClick={() => setOpen(true)} sx={{ mt: 'auto' }}>Подробнее</Button>
            </Box >
        </>
    )
}

export default Item