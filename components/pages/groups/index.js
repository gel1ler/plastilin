'use client'
import Info from '@/components/pages/groups/info'
import InfoSmall from '@/components/pages/groups/info-small'
import { useMediaQuery, useTheme } from '@mui/material'
import Template from '../template'

export default function Index() {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Template>
            {isSmallScreen ? <InfoSmall /> : <Info />}
        </Template>
    )
}
