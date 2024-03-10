"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import SectionHeader from './section-header';
import Services from '@/data/skills';
import { FaLaptopCode,FaPenNib } from "react-icons/fa6";
import { PiDesktopTowerFill } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { AiFillGitlab } from "react-icons/ai";


export default function Skill() {

  const {ref, inView} = useInView({triggerOnce:false, threshold: 0.2});
  return (
<div className="skill my-8">
  <SectionHeader title={"What I Do"}/>
  <div className="activities my-8 flex flex-col md:flex-row flex-wrap">
    {
    Services.map((skill)=>(
      <motion.div
      key={skill.id} 
      initial={{opcacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="flex basis-1/2">
        <div className="icon h-16 min-w-16 flex justify-center items-center text-4xl text-sky-200 rounded-lg bg-smoky dark:bg-slate-700 dark:text-white lg:max-w-16">{checkIcon(skill.icon)}</div>
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


function checkIcon(iconName){
//check icon name
switch(iconName){
  case 'FaPenNib':
    return <FaPenNib/>
    break;
  case 'FaLaptopCode':
    return <FaLaptopCode/>
    break;
  case 'MdDesignServices':
    return <MdDesignServices/>
    break;
  case 'PiDesktopTowerFill':
    return <PiDesktopTowerFill/>
    break;

  default:
    return <AiFillGitlab/>
}
}