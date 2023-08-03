import React, { useEffect, useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import kids1 from '../../../../public/start-kids-1.jpg'
import kid2 from '../../../../public/start-kid-2.jpg'
import kid3 from '../../../../public/start-kid-3.jpg'
import Arrow from './arrow'
import Dots from './dots'
import Title from '@/components/UI/title'
import MyButton from '@/components/UI/button'

const images = [kids1, kid2, kid3]

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
                    mt: 1,
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
                <Dots current={current} length={images.length} />
                <Box
                    sx={{
                        bgcolor: 'white',
                        position: 'absolute',
                        p:5,
                        zIndex: 100,
                        bottom: '10%',
                        left: '10%',
                        borderRadius: '5%'
                      }}
                      className='column-centered'
                      data-aos='fade-up' 
                >
                    <Box sx={{ my: 2 }}>
                        <Title>Какой-то текст</Title>
                        <Typography data-aos='fade-up' textAlign='center' sx={{ mt: 1, width: '70%', mx: 'auto' }}>
                            Давно выяснено, что при оценке дизайна.
                        </Typography>
                    </Box>
                    <MyButton />
                </Box>
            </Box>
        </Box>
    )
}

export default BigScreen