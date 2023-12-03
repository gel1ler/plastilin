import { Box } from '@mui/material'
import React from 'react'
import { teachers } from '@/data'
import Teacher from './teacher'

const Teachers = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)'],
                gap: 3,
                mt: 5,
                mb: 15
            }}
        >
            {teachers.map((i, key) => <Teacher key={key} i={i} />)}
        </Box>
    )
}

export default Teachers