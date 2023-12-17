import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Item from './Item'
import { getDatesOfCurrentWeek } from '@/services';

const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

const Schedule = ({ lessons }) => {
    const week = getDatesOfCurrentWeek()

    return (
        <Container
            maxWidth='xl'
            sx={{
                display: 'grid',
                gridTemplate: '20px 30px 1fr / repeat(7, 1fr)',
                gap: 2,
                my: 4,
                minHeight: '50vh',
                width: '100vw',
                overflow: 'scroll'
            }}
        >
            {days.map((i, key) =>
                <Typography key={key} textAlign='center' fontWeight='bold'>
                    {i}
                </Typography>
            )}
            {week.map((i, key) =>
                <Typography key={key} color='GrayText' textAlign='center'>
                    {i}
                </Typography>
            )}
            {lessons.map((dayLessons, dayIndex) =>
                <Box key={dayIndex} sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
                    {dayLessons.map((lesson, lessonIndex) =>
                        <Item key={`${dayIndex}-${lessonIndex}`} props={lesson} />
                    )}
                </Box>
            )}
        </Container>
    )
}

export default Schedule