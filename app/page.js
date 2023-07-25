import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/header'
import Start from '@/components/pages/index/start'
import About from '@/components/pages/index/about'

export default function Home() {
  return (
    <main className={styles.main}>
      <Start />
      <About />
    </main>
  )
}
