'use client'
import React from 'react'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import BigScreen from './bigScreen'
import SmallScreen from './smallScreen'

const Start = () => {
    const theme = useTheme()
    const isXLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))

    return (
        isXLargeScreen ? <BigScreen /> : <SmallScreen />
    )

}

export default Start