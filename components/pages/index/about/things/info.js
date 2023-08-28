import { Box, Dialog, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const Info = ({ open, setOpen, i }) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            sx={{
                overflowX: 'hidden'
            }}
        >
            <Box
                className='column-centered'
                sx={{
                    p: 3,
                    gap: 2,
                    // overflowY: 'scroll',
                    maxHeight: '80vh',
                    overflowX: 'hidden'
                }}
            >
                <Typography variant='h5' textAlign='center'>
                    {i.fullName}
                </Typography>
                <Image
                    alt='Преподаватель детского центра Пластилин'
                    src={i.photo}
                    width={270}
                    style={{
                        borderRadius: '100%'
                    }}
                />
                <Typography textAlign='center'>
                    {i.description}
                </Typography>
            </Box>
        </Dialog>
    )
}

export default Info