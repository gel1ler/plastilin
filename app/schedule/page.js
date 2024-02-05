import Index from '@/components/pages/schedule/Index'
import { getLessons } from '@/firebase/clientApp'
import React from 'react'

export const metadata = {
    title: 'Пластилин - расписание',
    description: 'Расписание занятий детского центра Пластилин.',
  }

const Page = async () => {
    const lessons = await getLessons()

    return (
        <Index lessons={lessons} />
    )
}

export default Page