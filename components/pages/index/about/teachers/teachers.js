import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { people } from '@/../data'
import Teacher from './teacher'
import ArrowText from '@/components/UI/text/arrowText'

const Teachers = () => {
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <Box id='teachers' className='column-centered'>
            <Typography data-aos='fade-up' variant={isLargeScreen ? 'h3' : 'h4'} textAlign='center'>Наши <b>педагоги</b></Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: ['column', 'column', 'row'],
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3,
                    my: 2,
                }}
            >
                {people.slice(0,3).map((i, key) => <Teacher key={key} i={i} />)}
            </Box>
            <ArrowText variant='h6' type='small' anchor='right' centered href='/teachers'>
                Полный коллектив педагогов
            </ArrowText>
        </Box >
    )
}

export default Teachers