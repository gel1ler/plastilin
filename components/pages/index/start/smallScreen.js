import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import logo from '../../../../public/logo/logo-gorizontal.svg'
import kids from '../../../../public/children/start-circle.png'
import MyButton from '@/components/UI/button'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'


const SmallScreen = () => {
    return (
        <Box
            id='home'
            className='column-centered'
            sx={{
                mt: '90px',
                height: '90svh',
                mx: 'auto',
                minHeight: '570px',
                justifyContent: 'center',
                gap: 1
            }}
        >

            <Image
                alt='Логотип  детского центра Пластилин'
                src={logo}
                width={300}
                style={{
                    objectFit: 'contain',
                }}
            />
            <Image
                alt='Дети из детского центра Пластилин'
                src={kids}
                width={285}
                height={285}
                style={{
                    maxHeight: '35vh',
                    objectFit: 'contain',
                }}
            />
            <Box sx={{ my: 2 }}>
                <Typography
                    textAlign='center'
                    sx={{
                        mt: 1,
                        mx: 'auto',
                        width: '90%',
                        fontSize: 29
                    }}
                >

                    <b>Идет набор</b> в группы
                </Typography>
                <Typography
                    textAlign='center'
                    sx={{
                        mt: 1,
                        mx: 'auto',
                        width: '90%',
                    }}
                >
                    5 возрастных групп от <b>1.2 года</b>
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Link href='/groups'>
                    <Button
                        variant='contained'
                        sx={{
                            px: 4,
                            py: 1,
                            mb: 2,
                            width: 'max-content',
                            borderRadius: '15px'
                        }}
                    >
                        Подробнее
                    </Button>
                </Link>
                <a href='/schedule'>
                    <Button
                        variant='outlined'
                        sx={{
                            px: 4,
                            py: 1,
                            mb: 2,
                            width: 'max-content',
                            borderRadius: '15px'
                        }}
                    >
                        Расписание
                    </Button>
                </a>
            </Box>
        </Box>
    )
}

export default SmallScreen