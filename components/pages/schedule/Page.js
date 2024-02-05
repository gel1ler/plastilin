import IB from '@/components/UI/IB'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Item from './Item'

const Page = ({ dayLessons, dayIndex, day, data, forward, backward }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    width: '100%',
                    zIndex: 10,
                    position: 'relative',
                    boxShadow: '0 4px 2px -2px rgba(0,0,0,.1)',
                    pb: 1
                }}
            >
                <IB f={backward}>
                    <ArrowBackIos />
                </IB>
                <Box>
                    <Typography textAlign='center' fontWeight='bold'>
                        {day}
                    </Typography>
                    <Typography color='GrayText' textAlign='center'>
                        {data}
                    </Typography>
                </Box>
                <IB f={forward}>
                    <ArrowForwardIos />
                </IB>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    p: 2,
                    height: '70vh',
                    overflowY: 'scroll'
                }}
            >
                {dayLessons.map((lesson, lessonIndex) =>
                    <Item key={`${dayIndex}-${lessonIndex}`} props={lesson} />
                )}
            </Box>
        </Box>
    )
}

export default Page