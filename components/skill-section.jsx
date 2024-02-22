"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { FiPenTool } from "react-icons/fi";
import SectionHeader from './section-header';
import Services from '@/data/skills';


export default function Skill({id, service, icon, description}) {

  const {ref, inView} = useInView({triggerOnce:false, threshold: 0.2});
  return (
<div className="skill my-8">
  <SectionHeader title={"What I Do"}/>
  <div className="activities my-8 flex flex-col md:flex-row flex-wrap">
    {
    Services.map((skill)=>(
      <motion.div
      key={skill.id}
      ref={ref} 
      initial={{opcacity: 0, y: 20}}
      animate={{opacity: inView? 1 : 0, y: 0}}
      transition={{duration: 0.4}}
      className="flex basis-1/2">
        <div className="icon h-16 min-w-16 flex justify-center items-center text-4xl rounded-lg bg-slate-200 dark:bg-slate-700 dark:text-white lg:max-w-16">{skill.icon}</div>
        <div className="px-2 md:px-4 py-4">
          <p className="mb-4 text-2xl dark:text-white font-semibold">{skill.service}</p>
          <p className="dark:text-white">{skill.description}</p>
        </div>
      </motion.div>
    ))
    
    }
  </div>
</div>

  )
}
