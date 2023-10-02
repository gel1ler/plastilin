'use client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect, useState } from 'react'
import Falling from '@/components/UI/background/falling'
import Loader from '@/components/UI/loader/loader'

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

export default function Template({ children, main }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AOS.init({
            anchorPlacement: 'bottom-bottom',
        })
        AOS.refresh()
        setTimeout(() => setLoading(false), 1500)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Loader loading={loading} />
            {loading ?
                null :
                <>
                    <Falling />
                    <Header main={main} />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </>
            }
        </ThemeProvider>
    )
}
