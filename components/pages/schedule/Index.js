'use client'
import { Protect, UserButton, useAuth, useSession, useUser } from '@clerk/nextjs'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Schedule from './Schedule';
import Template from '../template';

const Index = ({lessons}) => {
    return (
        <Template noBg>

            <Box>
                <Box sx={{ p: 2, width: '100vw' }}>
                    <UserButton afterSignOutUrl='/' />
                    <Typography textAlign='center' variant='h4' mt={10}>
                       <b>Расписание</b>
                    </Typography>
                    <Schedule lessons={lessons} />
                </Box>
            </Box>
        </Template>
    )
}

export default Index