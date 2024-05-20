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

const InfoSmall = () => {
    return (
        <Box
            sx={{
                p: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: '400px',
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
                    <ListText name='1️⃣ Ясли'>
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
                                    * 5 раз в неделю: 21.500 р/месяц
                                </ListItemText>
                                <ListItemText>
                                    * разовое посещение: 1.700 р/день
                                </ListItemText>
                                <ListItemText>
                                    * группа входного дня: 1.700 р / день
                                </ListItemText >
                                <ListItemText >
                                    * первое пробное посещение - бесплатно
                                </ListItemText >
                            </List >
                        </Box>
                    </ListText>
                    <Divider />
                    <ListText name='2️⃣ Младшая'>
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
                                    * 5 раз в неделю: 21.500 р/месяц
                                </ListItemText>
                                <ListItemText>
                                    * разовое посещение: 1.700 р/день
                                </ListItemText>
                                <ListItemText>
                                    * группа входного дня: 1.700 р / день
                                </ListItemText >
                                <ListItemText >
                                    * первое пробное посещение - бесплатно
                                </ListItemText >
                            </List >
                        </Box>
                    </ListText>
                    <Divider />
                    <ListText name='3️⃣ Средняя'>
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
                                    * 5 раз в неделю: 19.500 р / месяц
                                </ListItemText>
                                <ListItemText>
                                    * разовое посещение: 1.500 р / день
                                </ListItemText>
                                <ListItemText>
                                    * группа входного дня: 1.500 р / день
                                </ListItemText >
                                <ListItemText >
                                    * первое пробное посещение - бесплатно
                                </ListItemText >
                            </List >
                        </Box>
                    </ListText>
                    <Divider />
                    <ListText name='4️⃣ Старшая'>
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
                                    * 5 раз в неделю: 19.500 р / месяц
                                </ListItemText>
                                <ListItemText>
                                    * разовое посещение: 1.500 р / день
                                </ListItemText>
                                <ListItemText>
                                    * группа входного дня: 1.500 р / день
                                </ListItemText >
                                <ListItemText >
                                    * первое пробное посещение - бесплатно
                                </ListItemText >
                            </List >
                        </Box>
                    </ListText>
                    <Divider />
                    <ListText name='5️⃣ Подготовительная'>
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
                                    * 5 раз в неделю: 19.500 р / месяц
                                </ListItemText>
                                <ListItemText>
                                    * разовое посещение: 1.500 р / день
                                </ListItemText>
                                <ListItemText>
                                    * группа входного дня: 1.500 р / день
                                </ListItemText >
                                <ListItemText >
                                    * первое пробное посещение - бесплатно
                                </ListItemText >
                            </List >
                        </Box>
                    </ListText>
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
                    <ListText name='🟢 Продленка'>
                        <Box>
                            <Typography variant="h5">
                                🟢 Продленка
                            </Typography>
                            <Typography variant='h6'>
                                Две возрастные группы: <br />1 + 2 классы; 3 + 4 классы.
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
                                    * первое пробное посещение - бесплатно
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
                    </ListText>
                    <Divider />
                    <ListText name='🟢 Групповые дополнительные программы для детей от 3х лет'>
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
                    </ListText>
                    <Divider />
                    <ListText name='🟢 Индивидуальные программы'>
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
                    </ListText>
                    <Divider />
                    <ListText name='🟢 Школа будущего первоклассника.'>
                        <Box>
                            <Typography variant="h5">
                                🟢 Школа будущего первоклассника
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
                                    * первое пробное посещение - бесплатно
                                </ListItemText>
                            </List >
                        </Box>
                    </ListText>
                </Box>
            </Box>
            <Box id="other_groups">
                <Typography variant="h4" textAlign='center' sx={{ mt: 4 }}>
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
        </Box>
    )
}

export default InfoSmall