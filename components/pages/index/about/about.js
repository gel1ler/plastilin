import React, { useRef, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'
import half from '@/public/falling/half.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Slider from './slider'
import { what } from './data'


const About = () => {
    const theme = useTheme()
    const imageRef = useRef()

    useEffect(() => {
        window.addEventListener('scroll', event => {
            requestAnimationFrame(() => {
                const rotation = window.scrollY / 15
                imageRef.current.style.transform = `rotate(${rotation}deg)`;
            });
        });
    }, []);

    return (
        <Box
            id='about'
            sx={{
                width: ['100vw', '100vw', '100vw', '1200px'],
                minWidth: '300px',
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <Typography data-aos='fade-up' variant='h4' textAlign='center'>Характер человека, как <b>пластилин</b></Typography>
                <Image
                    alt='rotated half bg'
                    ref={imageRef}
                    src={half}
                    style={{
                        position: 'absolute',
                        objectFit: 'contain',
                        zIndex: -1,
                        opacity: 0.5,
                        top: -30,
                        left: 0,
                        right: 0,
                        margin: '0 auto'
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} data-aos='fade-up'>
                    <Typography variant="body2">
                        Листайте вправо
                    </Typography>
                    <ArrowRightAltIcon sx={{ opacity: 0.5, fontSize: 15 }} />
                </Box>
            </Box>
            <Slider />
            <Box sx={{ mt: 8 }}>
                <Typography variant="h4" textAlign="center" data-aos='fade-up'>
                    Пластилин <b>это</b>
                </Typography>
                <Box
                    className="column-centered"
                    sx={{
                        px:3,
                        py:2,
                        gap:2,
                        // bgcolor: 'rgb(240,240,240)',
                        mx:1,
                        borderRadius: '20px'
                    }}
                >
                    {what.map((i, key) =>
                        <Box
                            key={key}
                            sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                bgcolor: 'secondary.main',
                                borderRadius: '20px',
                                p: 1
                            }}
                        >
                            <Image
                                src={i.icon}
                                width={50}
                                height={50}
                            />
                            <Typography sx={{fontSize: 'large'}}>
                                {i.name}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box >
    )
}

export default About