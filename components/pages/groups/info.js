import { Box, Dialog, Typography, List, ListItemText, Tabs, Tab } from '@mui/material'
import React, { useState } from 'react'
import MyTabs from './myTabs'
import MyTabs2 from './myTabs2'
import Form from '@/components/UI/form'

const Info = () => {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)

    const handleChange1 = (event, newValue) => {
        setValue1(newValue)
    }

    const handleChange2 = (event, newValue) => {
        setValue2(newValue)
    }

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
            <Box sx={{bgcolor: 'additional.main', p:2, width: 'max-content', borderRadius: '20px'}}>
                <Typography variant='h5'>
                    Продолжительность:
                </Typography>
                <List disablePadding>
                    <ListItemText>
                        1. Утренняя группа: 9:00* - 13:00 <br /> *дежурная  группа ежедневно принимает детей с 7:00.
                    </ListItemText>
                    <ListItemText>
                        2. Вечерняя группа: 16:00 - 20:00
                    </ListItemText>
                </List>
            </Box>
            <Box sx={{bgcolor: 'secondary.main', p:2, width: '70%', borderRadius: '20px'}}>
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
                <MyTabs value={value1} handleChange={handleChange1} />
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
            <Box>
                <Typography variant="h4" textAlign='center'>
                    А также
                </Typography>
                <List>
                    <ListItemText>
                        🟢 Группа «Мама и малыш»
                    </ListItemText>
                    <ListItemText>
                        🟢 Семинары для родителей
                    </ListItemText>
                    <ListItemText>
                        🟢 Работа с детским и семейным психологом
                    </ListItemText>
                    <ListItemText>
                        🟢 Conversation для развития языка
                    </ListItemText>
                    <ListItemText>
                        🟢 Клуб будущих мам
                    </ListItemText>
                </List>
            </Box>
            <Form center m />
            <Typography variant="h6" textAlign='center' data-aos='fade-up'>
                Праздничное открытие состоится <b>16 сентября!</b> Ждём вас в гости с 16:00 до 20:00 🎈Будет много угощений, анимационная программа, конкурсы и мастер-классы 🎉
            </Typography>
        </Box>
    )
}

export default Info