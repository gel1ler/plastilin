import { Box, Dialog, Typography, List, ListItemText, Divider } from '@mui/material'
import React, { useState } from 'react'
import Link from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Form from '@/components/UI/form';

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

                }}
            >
                {name}
            </Typography>
        </>
    )
}

const InfoSmall = ({ data, additionalData }) => {
    return (
        <Box
            sx={{
                p: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                // maxWidth: '400px',
                mt: '60px'
            }}
        >
            <Link href='/'>
                <Typography
                    variant='body2'
                    className='centered'
                    sx={{
                        width: 'max-content'
                    }}
                >
                    <ArrowRightAltIcon
                        sx={{
                            transform: 'scale(-1, 1)',
                            fontSize: '15px'
                        }}
                    />
                    На главную
                </Typography>
            </Link>
            <Typography variant='h4' textAlign='center'>
                Пять возрастных групп от <b>1 года и 2 месяцев</b>
            </Typography>
            <Box sx={{ bgcolor: 'additional.main', p: 2, borderRadius: '20px' }}>
                <Typography variant='h5'>
                    Продолжительность:
                </Typography>
                <List disablePadding>
                    <ListItemText>
                        1. Утренняя группа: 9:00* - 13:00<br /> *дежурная  группа ежедневно принимает детей с 7:00.
                    </ListItemText>
                    <ListItemText>
                        2. Вечерняя группа: 16:00 - 20:00
                    </ListItemText>
                </List>
            </Box>
            <Box sx={{ bgcolor: 'secondary.main', p: 2, borderRadius: '20px' }}>
                <Typography variant='h5'>
                    Распорядок дня:
                </Typography>
                <List disablePadding>
                    <ListItemText>
                        - Зарядка
                    </ListItemText>
                    <ListItemText>
                        - Перекус (представляет детский центр)
                    </ListItemText>
                    <ListItemText>
                        - Утренний/вечерний круг
                    </ListItemText>
                    <ListItemText>
                        - Занятия со своим воспитателем (творческие и интеллектуальные занятия, подготовка к школе)
                    </ListItemText>
                    <ListItemText>
                        - Свободная игра
                    </ListItemText>
                    <ListItemText>
                        - Занятие с приходящим педагогом (английский язык, логопед, нейропсихолог, ораторское мастерство, театральный кружок, курсы этикета и пр)
                    </ListItemText>
                    <ListItemText>
                        - Перекус (представляет детский центр)
                    </ListItemText>
                    <ListItemText>
                        - Свободная игра
                    </ListItemText>
                </List>
            </Box>
            <Box id="main_groups">
                <Typography variant="h4" textAlign='center' sx={{ mt: 4 }}>
                    Основные группы
                </Typography>
                <Typography variant="body2" textAlign='center'>
                    Выберите интересующую вас группу
                </Typography>
                <Box>
                    {data.map((group, index) => (
                        <React.Fragment key={index}>
                            <ListText name={group.title}>
                                <Box>
                                    <Typography variant="h5">
                                        {group.title}
                                    </Typography>
                                    <List disablePadding>
                                        {group.description.map((desc, i) => (
                                            <ListItemText key={i}>
                                                {desc}
                                            </ListItemText>
                                        ))}
                                    </List>
                                </Box>
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
                            </ListText>
                            <Divider />
                        </React.Fragment>
                    ))}
                </Box>
            </Box>
            <Box id="additional_groups">
                <Typography variant="h4" textAlign='center' sx={{ mt: 4 }}>
                    Дополнительные группы
                </Typography>
                <Typography variant="body2" textAlign='center'>
                    Выберите интересующую вас группу
                </Typography>
                <Box>
                    {additionalData.map((group, index) => (
                        <React.Fragment key={index}>
                            <ListText name={group.title}>
                                <Box>
                                    <Typography variant="h5">
                                        {group.title}
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
                            <Divider />
                        </React.Fragment>
                    ))}
                </Box>
            </Box>
            <Form center m />
        </Box>
    )
}

export default InfoSmall