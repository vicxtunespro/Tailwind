import EduBackground from '@/components/eduction-background'
import Experience from '@/components/experience-section'
import PageHeader from '@/components/page-header'
import Skills from '@/components/skills-section'
import React from 'react'

export default function Resume() {
  return (
    <div className='w-full min-h-screen dark:bg-slate-800 bg-slate-100 overflow-hidden'>
        <PageHeader title={'Resume'} name={'resume'}></PageHeader>
        <div className="main-conten p-8 flex flex-col md:flex-row gap-4">
          <div className='md:w-3/4'>
            <EduBackground/>
            <Experience/>
          </div>
          <Skills></Skills>
        </div>
    </div>
  )
}
