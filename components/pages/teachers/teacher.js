import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import Info from './info'
import stock from '@/public/people/person.png'

const Teacher = ({ i }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box
            data-aos='fade-up'
            className='column-centered'
            sx={{
                gap: 1,
                bgcolor: 'rgb(245,245,245)',
                width: 'max-content',
                position: 'relative',
                borderRadius: '20px',
                height: 'auto',
                overflow: 'hidden',
                p: 3,
                maxWidth: '300px',
                width: ['80%', '100%', '80%',],
                transition: 'all .5s ease',
                overflow: 'hidden',
                '&:hover': {
                    '& .text12': {
                        background: 'rgba(235, 235, 235, .9)',
                        opacity: 1
                    }
                }
            }}
        >
            <Box
                sx={{
                    cursor: 'pointer',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    transition: 'all .3s ease',

                }}
                className='centered text12'
                onClick={handleOpen}
            >
                <Typography variant='h5' sx={{ textDecoration: 'underline' }}>
                    Подробнее
                </Typography>
            </Box>
            <Info open={open} onClose={handleClose} i={i} />
            <Image
                alt='Преподаватель детского центра Пластилин'
                src={i.photo ? i.photo : stock}
                height={250}
                width={250}
                style={{
                    objectFit: 'cover',
                    borderRadius: '100%',
                    aspectRatio: '1/1'
                }}
            />
            <Box>
                <Typography variant='h5' textAlign='center' sx={{ mt: 1, fontSize: [25, 25, 30] }}>
                    {i.name }
                </Typography>
            </Box>
        </Box >
    )
}

export default Teacher