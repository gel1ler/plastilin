import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from './icons'
import Link from 'next/link'

const Text = ({ href, children }) =>
    <Link href={href}>
        <Typography fontSize='large' sx={{ transition: 'all .15s ease-out', ':hover': { color: 'primary.main' } }}>
            {children}
        </Typography>
    </Link>

const Footer = () => {
    return (
        <Box
            className='column-centered'
            sx={{
                bgcolor: '#f1f1f1',
                justifyContent: 'space-between',
                gap: 1,
                py: 4,
                width: '100%'
            }}
        >
            <Container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
                    mb: 4,
                    gap: 5,
                    mx: 'auto',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '250px', mx: 'auto' }}>
                    <Image
                        src='/logo/logo-gorizontal.svg'
                        width={250}
                        height={70}
                        alt='logo'
                    />
                    <Box sx={{ mx: 'auto' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 1,

                            }}
                        >
                            <InstagramIcon />
                            <VkIcon />
                            <TelegramIcon />
                        </Box>
                        <PhoneCall />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', }}>
                    <Typography variant='h5' fontWeight='bold'>
                        Информация
                    </Typography>
                    <Text href='/agreement'>Пользовательское соглашение</Text>
                    <Text href='/privacy'>Персональные данные</Text>
                    <Text href='#about_anchor'>Публичная оферта</Text>
                </Box>
                <Box sx={{ display: ['none', 'none', 'flex'], flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Typography variant='h5' fontWeight='bold'> 
                        Группы
                    </Typography>
                    <Text href='/groups#main_groups'>Основные группы</Text>
                    <Text href='/groups#additional_groups'>Дополнительные группы</Text>
                    <Text href='/groups#other_groups'>Другое</Text>
                </Box>
            </Container >
            <Typography variant='body2' textAlign='center' sx={{ px: 1, }}>
                ©Любое использование либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления допускается лишь с разрешения правообладателя и только со ссылкой на источник: www.plastilin-deti.ru
            </Typography>
        </Box >
    )
}

export default Footer