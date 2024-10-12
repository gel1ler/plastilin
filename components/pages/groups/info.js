'use client'
import { Box, Dialog, Typography, List, ListItemText, Divider } from '@mui/material'
import React, { useState } from 'react'
import Form from '@/components/UI/form'
import Group from './group'

const ListText = ({ children, name }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <Box
                    className='column-centered'
                    sx={{
                        p: 3,
                        overflowY: 'scroll',
                        maxHeight: '80vh',
                        overflowX: 'hidden'
                    }}
                >
                    {children}
                </Box>
            </Dialog>
            <Typography
                onClick={() => setOpen(true)}
                variant='h6'
                sx={{
                    mt: 1,
                    p: 1,
                    textAlign: ['center', 'center', 'left']
                }}
            >
                {name}
            </Typography>
        </>
    )
}

const Info = ({ data, additionalData }) => {
    return (
        <Box
            sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                maxWidth: '800px',
                mt: '100px'
            }}
        >
            <Typography variant='h3' textAlign='center'>
                Четыре возрастные группы от <br /><b>1 года и 2 месяцев</b>
            </Typography>

            {/* Основные группы */}
            <Box>
                <Typography variant="h4" textAlign='center'>
                    Основные группы
                </Typography>
                <Typography variant="body2" textAlign='center'>
                    Выберите интересующую вас группу
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 2,
                        mt: 4
                    }}
                >
                    {data.map((group, index) => (
                        <Group key={index} props={group} />
                    ))}
                </Box>
            </Box>

            {/* Дополнительные группы */}
            <Box mt={10}>
                <Typography variant="h4" textAlign='center'>
                    Дополнительные группы
                </Typography>
                <Typography variant="body2" textAlign='center'>
                    Выберите интересующую вас группу
                </Typography>
                {additionalData.map((group, index) => (
                    <Box key={index} sx={{
                        cursor: 'pointer',
                    }}>
                        <ListText name={group.title}>
                            <Box>
                                <Typography variant="h5" sx={{ textAlign: ['center', 'center', 'left'] }}>
                                    {group.title}
                                </Typography>
                                <Typography variant='h6'>
                                    Описание:
                                </Typography>
                                <List disablePadding>
                                    {group.description.map((desc, i) => (
                                        <ListItemText key={i}>
                                            {desc}
                                        </ListItemText>
                                    ))}
                                </List>
                            </Box>
                            {group.prices && (
                                <Box>
                                    <Typography variant="h6">
                                        Стоимость:
                                    </Typography>
                                    <List disablePadding>
                                        {group.prices.map((price, i) => (
                                            <ListItemText key={i}>
                                                {price}
                                            </ListItemText>
                                        ))}
                                    </List>
                                </Box>
                            )}
                            {group.schedule && (
                                <Box>
                                    <Typography variant="h6">
                                        Распорядок дня:
                                    </Typography>
                                    <List disablePadding>
                                        {group.schedule.map((item, i) => (
                                            <ListItemText key={i}>
                                                {item}
                                            </ListItemText>
                                        ))}
                                    </List>
                                </Box>
                            )}
                            {group.programs && (
                                <Box>
                                    <Typography variant="h6">
                                        Программы:
                                    </Typography>
                                    <List disablePadding>
                                        {group.programs.map((program, i) => (
                                            <ListItemText key={i}>
                                                {program}
                                            </ListItemText>
                                        ))}
                                    </List>
                                </Box>
                            )}
                        </ListText>
                        <Divider sx={{ opacity: 0.5 }} />
                    </Box>
                ))}
            </Box>
            <Form center m />
        </Box>
    )
}

export default Info