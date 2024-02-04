import EduBackground from '@/components/eduction-background'
import PageHeader from '@/components/page-header'
import React from 'react'

export default function Resume() {
  return (
    <div className='w-full min-h-screen dark:bg-slate-600 bg-slate-100 overflow-hidden'>
        <PageHeader title={'Resume'}></PageHeader>
        <div className="main-conten p-4">
          <EduBackground/>
        </div>
    </div>
  )
}
