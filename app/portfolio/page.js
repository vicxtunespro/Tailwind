import PageHeader from '@/components/page-header'
import ProjectSection from '@/components/project-section'
import React from 'react'

export default function Portfolio() {
    return (
      <div className='w-full min-h-screen dark:bg-slate-800 bg-slate-100 overflow-hidden'>
          <PageHeader title={'Portfolio'}></PageHeader>
          <div className="content-wrapper p-8">
            <ProjectSection/>
          </div>
      </div>
    )
}
