import React from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import circle from '@/public/falling/circle.svg'
import half from '@/public/falling/half.svg'
import Image from 'next/image'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

export default function NotFound() {
    return (
        <Box className='column-centered' sx={{ width: '100svw', height: '100svh', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Image
                    src={circle}
                    style={{
                        transform: 'rotate(90deg)'
                    }}
                />
                <Image
                    src={circle}
                    style={{
                        transform: 'rotate(90deg)'
                    }}
                />
            </Box>
            <Image
                src={half}
                style={{
                    transform: 'rotate(180deg)'
                }}
            />
            <Typography variant='h5' sx={{ my: 2 }}>
                Похоже такой страницы не существует
            </Typography>
            <Link href='/'>
                <Typography
                    variant='body2'
                    className='centered'
                    sx={{
                        width: 'max-content'
                    }}
                >
                    <ArrowRightAltIcon
                        sx={{
                            transform: 'scale(-1, 1)',
                            fontSize: '15px'
                        }}
                    />
                    На главную
                </Typography>
            </Link>
        </Box>
    )
}