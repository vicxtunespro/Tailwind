import React from 'react'

export default function ProjectSection
() {
  return (
    <div>
        <Categories/>
        <ProjectsView/>
    </div>
  )
}
function Categories(){
    return(
        <ul className='flex gap-2 px-4 flex-wrap cursor-pointer justify-center mb-8'>
            <li className='shrink-0 text-slate-600 dark:text-slate-100'>All</li>
            <li className='shrink-0 text-slate-600 dark:text-slate-100'>Direct URL</li>
            <li className='shrink-0 text-slate-600 dark:text-slate-100'>Image</li>
            <li className='shrink-0 text-slate-600 dark:text-slate-100'>Videos</li>
            <li className='shrink-0 text-slate-600 dark:text-slate-100'>Youtube Videos</li>
        </ul>
    )
}

function ProjectsView(){
    return(
        <div>
            <div className='project-container relative my-4 w-full h-48 rounded-lg overflow-hidden'>
                <div className="project-image image w-full h-full bg-yellow-400">
                    
                </div>
                <div className='project-description absolute w-full h-full top-0 left-0 bg-white dark:bg-slate-300 flex flex-col justify-center items-center opacity-0 transition-all transition-'>
                    <p className='text-xl font-bold'>Project 1</p>
                    <p>Click for details</p>
                </div>
            </div>
            <div className='project-container relative my-4 w-full h-48 rounded-lg overflow-hidden'>
                <div className="project-image image w-full h-full bg-yellow-400">
                    
                </div>
                <div className='project-description absolute w-full h-full top-0 left-0 bg-white dark:bg-slate-300 flex flex-col justify-center items-center opacity-0 transition-all transition-'>
                    <p className='text-xl font-bold'>Project 2</p>
                    <p>Click for details</p>
                </div>
            </div>
        </div>
    )
}