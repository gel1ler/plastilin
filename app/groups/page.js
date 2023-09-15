'use client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react'
import Falling from '../falling'
import Loader from '../loader/loader'
import Info from '@/components/pages/groups/info';
import InfoSmall from '@/components/pages/groups/info-small';
import { Typography, useMediaQuery } from '@mui/material';
import Head from 'next/head';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Nunito',
            'Intro-Bold'
        ].join(',')
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#59B376',
            contrastText: "#fff"
        },
        secondary: {
            main: '#EFDAA8',
        },
        additional: {
            main: '#ebebeb'
        }
    },
    shape: {
        borderRadius: 10,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 450,
            md: 700,
            lg: 1200,
            xl: 1536,
        }
    },
})

export default function Page() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AOS.init({
            anchorPlacement: 'bottom-bottom',
        })
        AOS.refresh()
        setTimeout(() => setLoading(false), 1500)
    }, [])

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Пластилин - группы</title>
                <meta name="description" content="5 групп детского цетра Пластилин от 1.2 года" />
            </Head>
            <Loader loading={loading} />
            {loading ?
                null :
                <>
                    <Falling />
                    <Header />
                    <main>
                        {isSmallScreen ? <InfoSmall /> : <Info />}
                    </main>
                    <Footer />
                </>
            }
        </ThemeProvider>
    )
}
