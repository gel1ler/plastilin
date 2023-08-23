import { Box, Dialog, Typography } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import IB from '@/components/UI/IB'

const Info = ({ open, setOpen, i }) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box
                className='column-centered'
                sx={{
                    p: 3,
                    gap: 2,
                    overflow: 'scroll',
                    maxHeight: '80vh'
                }}
            >
                <Typography variant='h5' textAlign='center'>
                    {i.fullName}
                </Typography>
                <Image
                    alt='Преподаватель'
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