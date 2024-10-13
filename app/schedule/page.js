import React from 'react'
import { Box, Typography } from '@mui/material'
import Schedule from '../../components/pages/schedule/Schedule';
import Template from '../../components/pages/template';
import { lessons } from '@/data';

export const metadata = {
    title: 'Пластилин - расписание',
    description: 'Расписание занятий детского центра Пластилин.',
}

const Page = () => {
    return (
        <Template noBg>
            <Box>
                <Box sx={{ py: 2, width: '100vw' }}>
                    <Typography textAlign='center' variant='h4' mt={10}>
                        <b>Расписание Ясли</b>
                    </Typography>
                    <Typography textAlign='center' variant='body2'>
                        Листайте или нажимайте на стрелки
                    </Typography>
                    <Schedule lessons={lessons} />
                </Box>
            </Box>
        </Template>
    )
}
export default Page