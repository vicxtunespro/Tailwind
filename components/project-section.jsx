'use client'
import React, {useState} from 'react'
import Projects from '@/data/projects'
import { motion } from 'framer-motion';

export default function ProjectSection
() {

    const[category, setCategory] = useState('all');

    const groups = Projects.filter(project => project.category === category);

  return (
    <div>
        <ul className='flex gap-2 px-4 flex-wrap cursor-pointer justify-center mb-8'>
            <li className='shrink-0 text-slate-600 dark:text-slate-100 cursor-pointer' onClick={()=>setCategory('all')}>All</li>
            <li className='shrink-0 text-slate-600 dark:text-slate-100 cursor-pointer' onClick={()=>setCategory('Web Design')}>Web Site</li>
            <li className='shrink-0 text-slate-600 dark:text-slate-100 cursor-pointer' onClick={()=>setCategory('Graphics Design')}>Graphics</li>
            <li className='shrink-0 text-slate-600 dark:text-slate-100 cursor-pointer' onClick={()=>setCategory('UI/UX Design')}>UX/UI</li>
            <li className='shrink-0 text-slate-600 dark:text-slate-100 cursor-pointer' onClick={()=>setCategory('PPT Presentation')}>Presentations</li>
        </ul>

                <div className='gap-2 flex-wrap ms:grid ms:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:justify-center'>
                    {
                        (category === 'all') ? (
                            Projects.map(project => {
                                return <Project
                                key={project.id}
                                name={project.name}
                                category={project.category}
                                />
                            })
                        ) : (
                            groups.map(project => {
                                return <Project
                                key={project.id}
                                name={project.name}
                                category={project.category}
                                />
                            })
                        )
                    }
            
        </div>
        
    </div>
  )
}



function Project({name, category}){
    return(
        <motion.div
        initial={{scale:0.8, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{duration: 0.5, ease:'easeIn'}}
        className='project-container relative w-full h-48 rounded-lg overflow-hidden'>
                <div className="project-image image w-full h-full bg-slate-400">
                    
                </div>
                <div className='project-description absolute w-full h-full top-0 left-0 bg-slate-200 dark:bg-slate-300 flex flex-col justify-center items-center opacity-0 transition-all transition-'>
                    <p className='font-bold text-center'>{name}</p>
                    <p>{category}</p>
                </div>
        </motion.div>
    )
}