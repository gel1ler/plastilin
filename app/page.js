'use client'
import styles from './page.module.css'
import Start from '@/components/pages/index/start'
import About from '@/components/pages/index/about'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import Contacts from '@/components/pages/index/contacts'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito'
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
  }
})

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
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
