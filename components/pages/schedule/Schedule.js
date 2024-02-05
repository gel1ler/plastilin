'use state'
import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatesOfCurrentWeek } from '@/services'
import Page from './Page';
import Filters from './Filters';

const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

const Schedule = ({ lessons }) => {
    const [ages, setAges] = useState([0, 14])
    const [filteredLessons, setFilteredLessons] = useState(lessons)

    const [step, setStep] = useState(0)
    const week = getDatesOfCurrentWeek()

    const forward = () => step < 6 && setStep(step => step + 1)
    const backward = () => step > 0 && setStep(step => step - 1)

    const filterLessons = () => {
        lessons.forEach(day => {
            const filtered = day.filter(lesson => lesson.ageFrom >= ages[0] && lesson.ageTo <= ages[1])
            setFilteredLessons(filtered)
        })
    }

    useEffect(() => {
        filterLessons(lessons)
    }, [ages])

    console.log(filteredLessons)

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
                <Filters
                    ages={ages}
                    setAges={setAges}
                />
                <Box
                    sx={{
                        width: '100%',
                        height: '80vh',
                        overflow: 'hidden',
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
                        {/* {filteredLessons.map((dayLessons, dayIndex) =>
                            <Page
                                key={dayIndex}
                                dayLessons={dayLessons}
                                dayIndex={dayIndex}
                                day={days[dayIndex]}
                                data={week[dayIndex]}
                                forward={forward}
                                backward={backward}
                            />
                        )} */}
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Schedule