import { Box, Dialog, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import stock from '@/public/people/person.png'

const Info = ({ open, onClose, i }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            sx={{
                overflowX: 'hidden'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 3,
                    gap: 2,
                    overflowY: 'scroll',
                    maxHeight: '80vh',
                    overflowX: 'hidden'
                }}
            >
                <Typography variant='h5' textAlign='center'>
                    {i.name}
                </Typography>
                <Image
                    alt='Преподаватель детского центра Пластилин'
                    src={i.photo ? i.photo : stock}
                    width={270}
                    style={{
                        borderRadius: '100%',
                        margin: '0 auto'
                    }}
                />
                <Typography>
                    <b>Направление:</b> {i.direction}
                </Typography>
                <Typography>
                    <b>Опыт:</b> {i.experience}
                </Typography>
                <Typography>
                    <b>О себе:</b> {i.description}
                </Typography>
                <Typography>
                    <b>Цитата:</b> {i.quote}
                </Typography>
            </Box>
        </Dialog>
    )
}

export default Info