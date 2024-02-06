import React from 'react'
import SectionHeader from './section-header'

export default function Skills() {
  return (
    <div className='mt-16 md:mt-0 md:w-3/5'>
        <DesignSkills/>
        <CodingSkills/>
        <Knowledge/>
        <Certificates/>
    </div>
  )
}
function DesignSkills(){
  return(
            <div>
                <SectionHeader title="Design Skills"></SectionHeader>
                <div className="exp-card bg-white dark:bg-slate-800 h-fit w-full p-8 relative">
                <ProgressBar title={"Web Design"} progress={"90%"}/>
                <ProgressBar title={"Print work"} progress={"40%"}/>
                <ProgressBar title={"Graphics Design"} progress={"80%"}/>
                <ProgressBar title={"Video Editing"} progress={"50%"}/>
                </div>
            </div>
          )
}

function CodingSkills(){
  return(
            <div className="mt-8">
                <SectionHeader title="Coding Skills"></SectionHeader>
                <div className="exp-card bg-white dark:bg-slate-800 h-fit w-full p-8 relative">
                <ProgressBar title={"HTML/CSS"} progress={"100%"}/>
                <ProgressBar title={"Javascript"} progress={"60%"}/>
                <ProgressBar title={"React/Next.js"} progress={"70%"}/>
                <ProgressBar title={"Node js"} progress={"80%"}/>
                <ProgressBar title={"PHP"} progress={"30%"}/>
                </div>
            </div>
          )
}

function ProgressBar({title, progress}){
    return(

        <div className="progress-bar py-2">
            <div className="flex justify-between mb-1">
            <p className="text-base font-medium text-slate-700 dark:text-white">{title}</p>
            <p className="text-sm font-medium text-slate-700 dark:text-white">{progress}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: progress}}></div>
            </div>
        </div>
    )
}
function Knowledge(){
  return(
    <div>
      <SectionHeader title="Knowledge"/>
      <div className="flex w-72 gap-2 flex-wrap">
        <button className="py-1 px-1 rounded-sm bg-blue-700 text-white text-sm shrink-0">Marketing</button>
        <button className="py-1 px-1 rounded-sm bg-blue-700 text-white text-sm shrink-0">Digital Design</button>
        <button className="py-1 px-1 rounded-sm bg-blue-700 text-white text-sm shrink-0">Print</button>
        <button className="py-1 px-1 rounded-sm bg-blue-700 text-white text-sm shrink-0">Time management</button>
        <button className="py-1 px-1 rounded-sm bg-blue-700 text-white text-sm shrink-0">Marketing</button>
        <button className="py-1 px-1 rounded-sm bg-blue-700 text-white text-sm shrink-0">Marketing</button>
      </div>
    </div>
  )
}
function Certificates(){
  return(
    <div>
      <SectionHeader title="Certificates"/>
    </div>
  )
}