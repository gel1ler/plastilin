'use client'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect, useState } from 'react'
import Falling from '@/components/UI/background/falling'
import Loader from '@/components/UI/loader/loader'

let theme = createTheme({
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

theme = responsiveFontSizes(theme)

export default function Template({ children, main, noBg }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AOS.init({
            anchorPlacement: 'center-bottom',
        })
        AOS.refresh()
        setTimeout(() => setLoading(false), 1500)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Loader loading={loading} />
            {!noBg ? <Falling /> : null}
            <Header main={main} />
            <main>
                {children}
            </main>
            <Footer />
        </ThemeProvider>
    )
}
