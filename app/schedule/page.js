import Index from '@/components/pages/schedule/Index'
import React from 'react'

export const metadata = {
    title: 'Пластилин - расписание',
    description: 'Расписание занятий детского центра Пластилин.',
  }

const Page = async () => {
    return (
        <Index />
    )
}

export default Page