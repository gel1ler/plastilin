import { Box, Dialog, Typography } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import IB from '@/components/UI/IB'
import Info from './info'

const Teacher = ({ i }) => {
    const [open, setOpen] = useState(false)

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
                width: '80%',
                height: 'auto',
                overflow: 'hidden',
                py: 2,
                maxWidth: '300px'
            }}
        >
            <Info open={open} setOpen={setOpen} i={i} />
            <IB
                f={() => setOpen(true)}
                sx={{
                    position: 'absolute',
                    right: 10,
                    top: 10
                }}
            >
                <InfoOutlinedIcon />
            </IB>
            <Image
                alt='Преподаватель'
                src={i.photo}


                style={{
                    objectFit: 'cover',
                    minWidth: 160,
                    minHeight: 160,
                    width: '80%',
                    height: '80%',
                    // aspectRatio: '1/1',
                    borderRadius: '100%',
                }}
            />
            <Box>
                <Typography variant='h5' textAlign='center' sx={{ mt: 1, fontSize: [25, 25, 30] }}>
                    {i.name}
                </Typography>
            </Box>
        </Box>
    )
}

export default Teacher