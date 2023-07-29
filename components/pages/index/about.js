import React from 'react'
import { Box, Typography } from '@mui/material'
import Title from '@/components/UI/title'
import Image from 'next/image'
import kids from '../../../public/cloud-kids.png'

const About = () => {
    return (
        <Box
            id='about'
            sx={{
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    my: 2,
                }}
            >
                <Box sx={{ width: '50vw' }}>
                    <Title>О нас</Title>
                    <Typography variant='h5' sx={{ mt: 2, fontSize: '23px' }}>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
                    </Typography>
                </Box>
                <Image
                    src={kids}
                    alt='Фото дети'
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '400px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(-2px 0px 10px #EFDAA8)'
                    }}
                />
            </Box>
        </Box>
    )
}

export default About