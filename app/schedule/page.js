import React, { Suspense } from 'react'
import { Box, Typography } from '@mui/material'
import Schedule from '../../components/pages/schedule/Schedule';
import Template from '../../components/pages/template';

export const metadata = {
    title: 'Пластилин - расписание',
    description: 'Расписание занятий детского центра Пластилин.',
}

const Page = () => {

    return (
        <Template>
            <Suspense>
                <Schedule />
            </Suspense>
        </Template>
    )
}
export default Page