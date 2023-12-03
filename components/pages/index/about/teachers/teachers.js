import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { teachers } from '../../../../../data'
import ArrowText from '@/components/UI/text/arrowText'
import HelperText from '@/components/UI/text/helperText'
import Teacher from '@/components/pages/teachers/teacher'

const Teachers = () => {
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <Box id='teachers' className='column-centered'>
            <Typography data-aos='fade-up' variant='h3' textAlign='center'>Наши <b>педагоги</b></Typography>
            <HelperText>
                Нажмите для подробной информации
            </HelperText>
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
                {teachers.slice(0, 3).map((i, key) => <Teacher key={key} i={i} />)}
            </Box>
            <ArrowText variant='h6' type='small' anchor='right' centered href='/teachers'>
                Полный коллектив педагогов
            </ArrowText>
        </Box >
    )
}

export default Teachers