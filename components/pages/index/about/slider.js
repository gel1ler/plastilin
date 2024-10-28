'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { begin as arr } from '../../../../data'
import half from '@/public/falling/half.svg'
import Plx from 'react-plx'
import HelperText from '@/components/UI/text/helperText'

const data = [
    {
        start: 0,
        end: '150vh',
        properties: [
            {
                startValue: 0,
                endValue: 90,
                property: "rotate",
            }
        ]
    },
]

const Slider = () => {
    return (
        <Box sx={{ width: '100vw' }}>
            <Box sx={{ position: 'relative' }}>
                <Typography sx={{ position: 'relative', zIndex: 2 }} data-aos='fade-up' variant='h3' textAlign='center'>Характер человека, как <b>пластилин</b></Typography>
                <Plx parallaxData={data}>
                    <Image
                        id='about'
                        alt='Часть логотипа детского центра Пластилин'
                        data-aos='fade-up'
                        src={half}
                        style={{
                            position: 'absolute',
                            objectFit: 'contain',
                            zIndex: 1,
                            top: -60,
                            left: -60,
                            opacity: 0.6,
                            right: 0,
                            margin: '0 auto'
                        }}
                    />
                </Plx>
                <HelperText arrow onlySmall>
                    Листайте вправо
                </HelperText>
            </Box>
            <Box
                sx={{
                    overflowX: 'scroll',
                    mt: 2,
                    position: 'relative',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: ['start', 'start', 'start', 'center'],
                }}
                data-aos='fade-up'
            >
                <Box
                    sx={{
                        height: '70vh',
                        width: [`${arr.length * 90}vw`, `${arr.length * 90}vw`, `${arr.length * 60}vw`, '90vw'],
                        display: 'flex'
                    }}
                >
                    {arr.map((i, key) =>
                        <Box
                            key={key}
                            sx={{
                                width: '90vw',
                                maxWidth: ['none', 'none', '50vw', '30vw'],
                                overflow: 'hidden',
                                my: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    width: '90%',
                                    height: '100%',
                                    overflow: 'hidden',
                                    mx: 3,
                                    borderRadius: '40px',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: key === 0 ? 'column' : 'column-reverse',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute',
                                        background: `linear-gradient(${key === 0 ? 'to bottom' : 'to top'}, rgb(250, 250, 250), transparent 40%)`,
                                        zIndex: -1
                                    }}
                                />
                                <Image
                                    alt='Дети из детского центра Пластилин'
                                    fill
                                    src={i.image}
                                    style={{
                                        objectFit: 'cover',
                                        zIndex: -2
                                    }}
                                />
                                <Typography
                                    variant="h5"
                                    textAlign='center'
                                    sx={{ m: [2, 2, 3] }}
                                >
                                    {i.text}
                                </Typography>
                                {i.additionalText ?
                                    <Typography
                                        textAlign='center'
                                        sx={{
                                            m: 1,
                                            bgcolor: 'secondary.main',
                                            p: 1,
                                            borderRadius: '10px',
                                            width: '70%'
                                        }}
                                    >
                                        {i.additionalText}
                                    </Typography>
                                    : null
                                }
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default Slider