import Index from '@/components/pages/amdin/Index'
import { getLessons } from '@/firebase/clientApp'
import React from 'react'

const Page = async () => {
    const lessons = await getLessons()

    return (
        <Index lessons={lessons} />
    )
}

export default Page