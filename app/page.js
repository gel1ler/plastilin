'use client'
import styles from './page.module.css'
import Start from '@/components/pages/index/start'
import About from '@/components/pages/index/about/about'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import Contacts from '@/components/pages/index/contacts'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react'
import Falling from './falling'
import Loader from './loader/loader'

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

export default function Home() {
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
      <Falling />
      <Header />
      <main className={styles.main}>
        <Start />
        <About />
        <Contacts />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
