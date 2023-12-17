import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import Item from './Item'
import { getDatesOfCurrentWeek } from '@/services';
import Create from './Create';

const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

const Schedule = ({ lessons }) => {
    const [openCreate, setOpenCreate] = useState(false)
    const [openChange, setOpenChange] = useState(false)
    const [selected, setSelected] = useState()
    const [selectedDay, setSelectedDay] = useState()

    const week = getDatesOfCurrentWeek()

    return (
        <>
            <Create
                open={openCreate}
                setOpen={setOpenCreate}
                selectedDay={selectedDay}
            />
            <Create
                open={openChange}
                setOpen={setOpenChange}
                lesson={selected}
                selectedDay={selectedDay}
                change
            />
            <Container
                maxWidth='xl'
                sx={{
                    display: 'grid',
                    gridTemplate: '40px 20px 30px 1fr / repeat(7, 1fr)',
                    gap: 2,
                    my: 4,
                    minHeight: '50vh',
                    width: '100vw',
                    overflow: 'scroll'
                }}
            >
                {Array(7).fill().map((i, key) =>
                    <Button
                        key={key}
                        variant='outlined'
                        sx={{ width: 'max-content', mx: 'auto', }}
                        onClick={() => {
                            setSelectedDay(key)
                            setOpenCreate(true)
                        }}
                    >
                        Добавить +
                    </Button>
                )}
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
                    <Box key={dayIndex} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {dayLessons.map((lesson, lessonIndex) =>
                            <Item
                                key={`${dayIndex}-${lessonIndex}`}
                                num={dayIndex}
                                props={lesson}
                                setOpenChange={setOpenChange}
                                setSelected={setSelected}
                                setSelectedDay={setSelectedDay}
                            />
                        )}
                    </Box>
                )}
            </Container>
        </>
    )
}

export default Schedule