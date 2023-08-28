import { Box, Dialog, Typography, List, ListItemText, Tabs, Tab } from '@mui/material'
import React, { useState } from 'react'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

const MyTabs2 = ({ value, handleChange }) => {
    return (
        <Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="🟢 Продленка" />
                <Tab label="🟢 Групповые доп..." />
                <Tab label="🟢 Индивидуальн..." />
                <Tab label="🟢 Школа буд..." />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Box>
                    <Typography variant="h5">
                        🟢 Продленка
                    </Typography>
                    <Typography variant='h6'>
                        Две возрастные группы: 1 + 2 классы; 3 + 4 классы.
                    </Typography>
                    <Typography>
                        Продолжительность: 14:00 - 18:00
                    </Typography>
                    <Typography variant="body2">
                        * дежурная группа ежедневно работает до 20:00
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            - Количество деток в группе - до 12 человек.
                        </ListItemText>
                        <ListItemText>
                            - Количество педагогов на группу - 1 + помощник
                        </ListItemText>
                    </List>
                </Box>
                <Box>
                    <Typography variant="h6">
                        Стоимость:
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            * 5 раз в неделю: 17.500 р/месяц
                        </ListItemText>
                        <ListItemText>
                            * разовое посещение: 1.500 р/день
                        </ListItemText>
                        <ListItemText >
                            * первое пробное занятие - бесплатно
                        </ListItemText >
                    </List >
                </Box>
                <Box>
                    <Typography variant="h6">
                        Распорядок дня:
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            - Отдых
                        </ListItemText>
                        <ListItemText>
                            - Перекус (представляет детский центр)

                        </ListItemText>
                        <ListItemText >
                            - Школьное домашнее задание
                        </ListItemText >
                        <ListItemText >
                            - Занятие с педагогом (английский язык, логопед, нейропсихолог, ораторское мастерство, театральный кружок, курсы этикета и пр)
                        </ListItemText >
                        <ListItemText >
                            - Перекус (представляет детский центр)
                        </ListItemText >
                        <ListItemText >
                            - Творческая деятельность / отдых
                        </ListItemText >
                        <ListItemText >
                            - Настольные и развивающие игры
                        </ListItemText >
                    </List >
                </Box>
            </TabPanel >
            <TabPanel value={value} index={1}>
                <Box>
                    <Typography variant="h5">
                        🟢 Групповые дополнительные программы для детей от 3х лет
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            Группы до 8 человек.
                        </ListItemText>
                        <ListItemText>
                            Длительность 40 - 60 минут.
                        </ListItemText>
                    </List>
                </Box>
                <List disablePadding>
                    <ListItemText>
                        * Школа ораторского мастерства
                    </ListItemText>
                    <ListItemText>
                        * Театральный кружок
                    </ListItemText>
                    <ListItemText>
                        * Английский
                    </ListItemText>
                    <ListItemText>
                        * Творческая мастерская
                    </ListItemText>
                    <ListItemText>
                        * Скорочтение
                    </ListItemText>
                    <ListItemText>
                        * Ментальная арифметика
                    </ListItemText>
                    <ListItemText>
                        * Каллиграфия
                    </ListItemText>
                    <ListItemText>
                        * Нейропсихолог(нейрографика и пр)
                    </ListItemText>
                    <ListItemText>
                        * Логопед
                    </ListItemText>
                    <ListItemText>
                        * Шахматы
                    </ListItemText>
                </List>
                <Box>
                    <Typography variant="h6">
                        Стоимость:
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            * Абонемент: 8.500 р 2 раза в неделю
                        </ListItemText>
                        <ListItemText>
                            * Разовое посещение: 1.300 р / 1 раз
                        </ListItemText>
                        <ListItemText >
                            * первое пробное занятие - бесплатно
                        </ListItemText >
                    </List >
                </Box>
            </TabPanel >
            <TabPanel value={value} index={2}>
                <Box>
                    <Typography variant="h5">
                        🟢 Индивидуальные программы
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            Длительность 40 - 60 минут.
                        </ListItemText>
                    </List>
                </Box>
                <List disablePadding>
                    <ListItemText>
                        * Английский
                    </ListItemText>
                    <ListItemText>
                        * Репетиторские занятия по школьным предметам (математика, русский и пр)
                    </ListItemText>
                    <ListItemText>
                        * Каллиграфия
                    </ListItemText>
                    <ListItemText>
                        * Нейропсихолог
                    </ListItemText>
                    <ListItemText>
                        * Логопед
                    </ListItemText>
                    <ListItemText>
                        * Подготовка к ОГЭ, ЕГЭ
                    </ListItemText>
                </List>
                <Box>
                    <Typography variant="h6">
                        Стоимость:
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            1.900 - 2500 р / занятие
                        </ListItemText>
                    </List >
                </Box>
            </TabPanel >
            <TabPanel value={value} index={3}>
                <Box>
                    <Typography variant="h5">
                        🟢 Школа будущего первоклассника.
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            - Группа до 12 человек.
                        </ListItemText>
                        <ListItemText>
                            - 2 раза в неделю по 1,5 часа.<br />
                            Включает в себя два урока по 30 - 40 минут + 1 перемена.
                        </ListItemText>
                    </List>
                </Box>
                <Box>
                    <Typography variant="h6">
                        Стоимость:
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            * абонемент 12.500 р / мес - по 2 раза в неделю
                        </ListItemText>
                        <ListItemText>
                            * первое пробное занятие - бесплатно
                        </ListItemText>
                    </List >
                </Box>
            </TabPanel >
        </Box >
    )
}

export default MyTabs2