'use client'
import Template from '../template'
import Start from '@/components/pages/index/start'
import About from '@/components/pages/index/about/about'
import Contacts from '@/components/pages/index/contacts'

export default function Index() {
  return (
    <Template main>
      <Start />
      <About />
      <Contacts />
    </Template>
  )
}
