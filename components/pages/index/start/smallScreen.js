import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import logo from '../../../../public/logo/logo-gorizontal.svg'
import kids from '../../../../public/children/start-circle.png'
import MyButton from '@/components/UI/button'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SmallScreen = () => {
    return (
        <Box
            id='home'
            className='column-centered'
            sx={{
                mt: '70px',
                height: '90svh',
                mx: 'auto',
                minHeight: '570px',
                justifyContent: 'center',
                gap: 1
            }}
        >
            <Image
                alt='Логотип'
                src={logo}
                width={300}
                style={{
                    objectFit: 'contain',
                }}
            />
            <Image
                alt='Стартовое фото дети'
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

                    <b>Маленький</b> человек - уже большая <b>личность</b>
                </Typography>
                <Typography
                    textAlign='center'
                    sx={{
                        mt: 1,
                        mx: 'auto',
                        width: '90%',
                    }}
                >

                    Дети нашего центра понимают свои и чужие эмоции, осознают их причину.
                </Typography>
            </Box>
            <AnchorLink href='#form' offset={100}>
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
            </AnchorLink>
        </Box>
    )
}

export default SmallScreen