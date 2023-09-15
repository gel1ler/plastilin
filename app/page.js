'use client'
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
import Head from 'next/head'

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
      <Head>
        <title>Пластилин - детский центр в Раменском</title>
        <meta
          name="description"
          content="Группы от 1 года и 2 месяцев. Развитие софт скилс. Опытные педагоги, которые знают, как работать с детьми нового поколения."
        />
      </Head>
      <Loader loading={loading} />
      <Falling />
      <Header main />
      <main>
        <Start />
        <About main />
        <Contacts />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
