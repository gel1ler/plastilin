'use state'
import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import Item from './Item'
import { getDatesOfCurrentWeek } from '@/services';
import Arrow from '../index/start/arrow';
import Image from 'next/image';
import IB from '@/components/UI/IB';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

const Schedule = ({ lessons }) => {
    const [step, setStep] = useState(0)
    const week = getDatesOfCurrentWeek()

    return (
        <Container
            maxWidth='xl'
            sx={{
                gap: 2,
                my: 4,
                minHeight: '50vh',
                height: 'max-content',
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: '33% 2fr',
                    width: '100%',
                }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100px',
                        bgcolor: 'red'
                    }}
                >

                </Box>
                <Box
                    sx={{
                        width: '100%',
                        height: '70vh',
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                        position: 'relative'
                    }}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            width: 100 * 7 + '%',
                            px: 1,
                            transition: 'transform .3s ease-in-out',
                            transform: `translateX(-${step * (100 / 7)}%)`,
                        }}
                    >
                        {lessons.map((dayLessons, dayIndex) =>
                            <Box key={dayIndex} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                                <Box sx={{ display: 'flex', gap: 2, mx: 'auto' }}>
                                    <IB f={() => step > 0 && setStep(step => step - 1)}>
                                        <ArrowBackIos />
                                    </IB>
                                    <Box>
                                        <Typography textAlign='center' fontWeight='bold'>
                                            {days[dayIndex]}
                                        </Typography>
                                        <Typography color='GrayText' textAlign='center'>
                                            {week[dayIndex]}
                                        </Typography>
                                    </Box>
                                    <IB f={() => step < 6 && setStep(step => step + 1)}>
                                        <ArrowForwardIos />
                                    </IB>
                                </Box>
                                {dayLessons.map((lesson, lessonIndex) =>
                                    <Item key={`${dayIndex}-${lessonIndex}`} props={lesson} />
                                )}
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Schedule