import { Box, Dialog, Typography, List, ListItemText, Tabs, Tab } from '@mui/material'
import React, { useState } from 'react'
import MyTabs from './myTabs'
import MyTabs2 from './myTabs2'
import Form from '@/components/UI/form'

const Info = () => {
    return (
        <Box
            sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                maxWidth: '1200px',
                mt: '100px'
            }}
        >
            <Typography variant='h3'>
                Пять возрастных групп от <b>1 года и 2 месяцев</b>
            </Typography>
            <Box sx={{ bgcolor: 'additional.main', p: 2, width: 'max-content', borderRadius: '20px' }}>
                <Typography variant='h5'>
                    Продолжительность:
                </Typography>
                <List disablePadding>
                    <ListItemText>
                        1. Детский сад полного дня: 8:30 - 19:00
                    </ListItemText>
                    <ListItemText>
                        2. Утренняя группа: 8:30 - 12:30
                    </ListItemText>
                    <ListItemText>
                        3. Вечерняя группа: 15:00 - 19:00
                    </ListItemText>
                </List>
            </Box>
            <Box sx={{ bgcolor: 'secondary.main', p: 2, width: '70%', borderRadius: '20px' }}>
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
            <Box>
                <Typography variant="h4" textAlign='center'>
                    Основные группы
                </Typography>
                <Typography variant="body2" textAlign='center'>
                    Выберите интересующую вас группу
                </Typography>
                <Box>
                    <Typography variant="h5">
                        {tab.title}
                    </Typography>
                    <List disablePadding>
                        {tab.description.map((desc, i) => (
                            <ListItemText key={i}>
                                - {desc}
                            </ListItemText>
                        ))}
                    </List>
                </Box>
                <Box>
                    <Typography variant="h6">
                        Стоимость:
                    </Typography>
                    <List disablePadding>
                        {tab.prices.map((price, i) => (
                            <ListItemText key={i}>
                                * {price}
                            </ListItemText>
                        ))}
                    </List>
                </Box>
            </Box>
            <Box>
                <Typography variant="h4" textAlign='center'>
                    Дополнительные группы
                </Typography>
                <Typography variant="body2" textAlign='center'>
                    Выберите интересующую вас группу
                </Typography>
                <MyTabs2 value={value2} handleChange={handleChange2} />
            </Box>
            <Form center m />
        </Box>
    )
}

export default Info