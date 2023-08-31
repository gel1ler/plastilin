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

const MyTabs = ({ value, handleChange }) => {
    return (
        <Box>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="1️⃣ Ясли" />
                <Tab label="2️⃣ Младшая" />
                <Tab label="3️⃣ Средняя" />
                <Tab label="4️⃣ Старшая" />
                <Tab label="5️⃣ Подготовительная" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Box>
                    <Typography variant="h5">
                        1️⃣ Ясли
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            - Количество деток в группе - до 7 человек.
                        </ListItemText>
                        <ListItemText>
                            - Количество воспитателей на группу - 2 + помощник
                        </ListItemText>
                    </List>
                </Box>
                <Box>
                    <Typography variant="h6">
                        Стоимость:
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            * 5 раз в неделю: 19.500 р/месяц
                        </ListItemText>
                        <ListItemText>
                            * разовое посещение: 1.700 р/день
                        </ListItemText>
                        <ListItemText>
                            * группа входного дня: 1.700 р / день
                        </ListItemText >
                        <ListItemText >
                            * первое пробное занятие - бесплатно
                        </ListItemText >
                    </List >
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box>
                    <Typography variant="h5">
                        2️⃣ Младшая группа
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            - Количество деток в группе - до 7 человек.
                        </ListItemText>
                        <ListItemText>
                            - Количество воспитателей на группу - 2 + помощник
                        </ListItemText>
                    </List>
                </Box>
                <Box>
                    <Typography variant="h6">
                        Стоимость:
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            * 5 раз в неделю: 19.500 р/месяц
                        </ListItemText>
                        <ListItemText>
                            * разовое посещение: 1.700 р/день
                        </ListItemText>
                        <ListItemText>
                            * группа входного дня: 1.700 р / день
                        </ListItemText >
                        <ListItemText >
                            * первое пробное занятие - бесплатно
                        </ListItemText >
                    </List >
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box>
                    <Typography variant="h5">
                        3️⃣ Средняя группа
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            - Количество деток в группе - до 12 человек.
                        </ListItemText>
                        <ListItemText>
                            - Количество воспитателей на группу - 1 + помощник
                        </ListItemText>
                    </List>
                </Box>
                <Box>
                    <Typography variant="h6">
                        Стоимость:
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            * 5 раз в неделю: 17.500 р / месяц
                        </ListItemText>
                        <ListItemText>
                            * разовое посещение: 1.500 р / день
                        </ListItemText>
                        <ListItemText>
                            * группа входного дня: 1.500 р / день
                        </ListItemText >
                        <ListItemText >
                            * первое пробное занятие - бесплатно
                        </ListItemText >
                    </List >
                </Box>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Box>
                    <Typography variant="h5">
                        4️⃣ Старшая группа
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            - Количество деток в группе - до 12 человек.
                        </ListItemText>
                        <ListItemText>
                            - Количество воспитателей на группу - 1 + помощник
                        </ListItemText>
                    </List>
                </Box>
                <Box>
                    <Typography variant="h6">
                        Стоимость:
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            * 5 раз в неделю: 17.500 р / месяц
                        </ListItemText>
                        <ListItemText>
                            * разовое посещение: 1.500 р / день
                        </ListItemText>
                        <ListItemText>
                            * группа входного дня: 1.500 р / день
                        </ListItemText >
                        <ListItemText >
                            * первое пробное занятие - бесплатно
                        </ListItemText >
                    </List >
                </Box>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Box>
                    <Typography variant="h5">
                    5️⃣ Подготовительная группа.
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            - Количество деток в группе - до 12 человек.
                        </ListItemText>
                        <ListItemText>
                            - Количество воспитателей на группу - 1 + помощник
                        </ListItemText>
                    </List>
                </Box>
                <Box>
                    <Typography variant="h6">
                        Стоимость:
                    </Typography>
                    <List disablePadding>
                        <ListItemText>
                            * 5 раз в неделю: 17.500 р / месяц
                        </ListItemText>
                        <ListItemText>
                            * разовое посещение: 1.500 р / день
                        </ListItemText>
                        <ListItemText>
                            * группа входного дня: 1.500 р / день
                        </ListItemText >
                        <ListItemText >
                            * первое пробное занятие - бесплатно
                        </ListItemText >
                    </List >
                </Box>
            </TabPanel>
        </Box>
    )
}

export default MyTabs