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
            <Link href='/groups'>
                <Button
                    variant='contained'
                    sx={{
                        px: 5,
                        py: 1,
                        mb: 2,
                        width: 'max-content',
                        borderRadius: '15px'
                    }}
                >
                    Подробнее
                </Button>
            </Link>
            {/* <AnchorLink href='#form' offset={100}>
                <Button
                    variant='contained'
                    sx={{
                        p: 2,
                        mb: 2,
                        width: '100%',
                        borderRadius: '15px'
                    }}
                >
                    Записаться на пробное занятие
                </Button>
            </AnchorLink> */}
        </Box>
    )
}

export default SmallScreen