import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { people } from '../data'
import Teacher from './teacher'

const Teachers = () => {
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <Box id='teachers'>
            <Typography data-aos='fade-up' variant={isLargeScreen ? 'h3': 'h4'} textAlign='center'>Наши <b>педагоги</b></Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: ['column', 'column', 'row'],
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 3,
                    mt: 2,
                }}
            >
                {people.map((i, key) => <Teacher key={key} i={i} />)}
            </Box>
        </Box >
    )
}

export default Teachers