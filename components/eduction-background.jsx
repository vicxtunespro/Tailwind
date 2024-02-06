import React from 'react'
import SectionHeader from './section-header'

export default function EduBackground() {
  return (
    <div>
        <SectionHeader  title={"Education"}/>
        <EduCard/>
        <EduCard/>
        <EduCard/>
    </div>
  )
}
function EduCard(){
  return(
          <div className="edu-card bg-white dark:bg-slate-800 h-fit w-full p-8 relative">
            <p className="text-slate-400 mb-2 mx-10">Institute of Learning</p>
            <p className="font-bold text-xl dark:text-white tracking-wider mb-2">Frontend Development</p>
            <p className="dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consectetur aspernatur voluptates perspiciatis atque enim.</p>
            <button className="px-2 py-1 border border-slate-200 dark:text-white absolute top-7 left-2 ">2016</button>
          </div>
          )
}