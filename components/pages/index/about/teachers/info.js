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
                className='column-centered'
                sx={{
                    p: 3,
                    gap: 2,
                    overflowY: 'scroll',
                    maxHeight: '80vh',
                    overflowX: 'hidden'
                }}
            >
                <Typography variant='h5' textAlign='center'>
                    {i.fullName}
                </Typography>
                <Image
                    alt='Преподаватель детского центра Пластилин'
                    src={i.photo ? i.photo : stock}
                    height={160}
                    width={160}
                    style={{
                        borderRadius: '100%'
                    }}
                />
                <Typography>
                    {i.description}
                </Typography>
            </Box>
        </Dialog>
    )
}

export default Info