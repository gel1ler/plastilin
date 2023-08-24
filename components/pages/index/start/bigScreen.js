import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import kids1 from '../../../../public/children/1h.jpg'
import kids2 from '../../../../public/children/2h.jpg'
import kids3 from '../../../../public/children/3h.jpg'
import Arrow from './arrow'
import Dots from './dots'
import Title from '@/components/UI/title'
import MyButton from '@/components/UI/button'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const images = [kids1, kids2, kids3]

const BigScreen = () => {
    const [current, setCurrent] = useState(0)
    const translate = -current * 100

    useEffect(() => {
        const timer = setInterval(() => {
            if (current === (images.length - 1)) {
                setCurrent(0)
            }
            else {
                next()
            }
        }, 5000)
        return () => clearInterval(timer)
    })

    const next = () => {
        if (current < images.length - 1) {
            setCurrent(current + 1)
        }
    }

    const prev = () => {
        if (current > 0) {
            setCurrent(current - 1)
        }
    }

    return (
        <Box
            id='home'
            className='column-centered'
            sx={{
                height: 'calc(100vh - 70px)',
                mt: '70px',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    width: '95%',
                    height: '95%',
                    overflow: 'hidden',
                    borderRadius: '50px',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        width: '300%',
                        height: '100%',
                        display: 'flex',
                    }}
                >
                    {images.map((image, key) =>
                        <Image
                            key={key}
                            alt='Стартовое фото дети'
                            src={image}
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                                transform: `translateX(${translate}%)`,
                                transition: 'all 0.5s ease-in-out'
                            }}
                        />
                    )}
                </Box>
                <Arrow left f={prev} active={current > 0} />
                <Arrow right f={next} active={current < images.length - 1} />
                <Dots current={current} length={images.length} setCurrent={setCurrent} />
                <Box
                    sx={{
                        bgcolor: 'white',
                        position: 'absolute',
                        py: 2,
                        zIndex: 100,
                        bottom: '5%',
                        left: '7%',
                        borderRadius: '30px',
                        width: '40%'
                    }}
                    className='column-centered'
                // data-aos='fade-up'
                >
                    <Box sx={{ my: 2 }}>
                        <Typography
                            textAlign='center'
                            sx={{
                                mx: 'auto',
                                width: '70%',
                                fontSize: 35
                            }}
                        >

                            <b>Маленький</b> человек - уже большая <b>личность</b>
                        </Typography>
                        <Typography data-aos='fade-up' variant='h6' textAlign='center' sx={{ mt: 1, width: '70%', mx: 'auto' }}>
                            Дети нашего центра понимают свои и чужие эмоции, осознают их причину.
                        </Typography>
                    </Box>
                    <AnchorLink href='#form'>
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
            </Box>
        </Box>
    )
}

export default BigScreen