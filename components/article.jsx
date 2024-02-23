"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'


export default function GraphicArticle() {
  return (
    <>
    <ArticleRight
    title={`Graphic Desgin`}
    description={`As a developer, mastering graphics design fundamentals can elevate your skillset and open up new opportunities for creativity and innovation. Whether you're building a website, mobile app, or software solution, incorporating principles of graphics design can significantly enhance the quality and impact of your work. Ready to dive into the world of graphics design? Download our Starter Guide to Graphics Design for Developers below and unlock the potential to create visually stunning and user-centric applications.`}
    />

    <ArticleLeft
    title={`Graphic Desgin`}
    description={`As a developer, mastering graphics design fundamentals can elevate your skillset and open up new opportunities for creativity and innovation. Whether you're building a website, mobile app, or software solution, incorporating principles of graphics design can significantly enhance the quality and impact of your work. Ready to dive into the world of graphics design? Download our Starter Guide to Graphics Design for Developers below and unlock the potential to create visually stunning and user-centric applications.`}
    />
    </>
  )
}
function ArticleRight ({title, description}){

  const {ref, inView} = useInView({triggerOnce:false, threshold:0.2});

  return(
    <motion.div 
    ref={ref}
    initial={{opacity:0, x:200}}
    animate={{opacity: inView ? 1: 0, x: inView ? 0: 200}}
    transition={{ duration: 0.5, ease: "easeIn"}}
    className="md:p-16 flex flex-col md:flex-row gap-8">

      <div className="gif h-full bg-slate-300 md:w-1/2 rounded overflow-hidden relative">
        {/* <Image src="https://cdn.dribbble.com/users/729829/screenshots/3088470/galshir-pen-tool-creation.gif" layout="fill" className="object-cover"> </Image> */}
      </div>
      <div className="content text-balance md:w-1/2 md:text-left flex flex-col gap-8 dark:text-white ">
        <p className="text-8xl tex">{title}</p>
        <p>{description}</p>
        <button className="bg-blue-600 dark:bg-slate-100 dark:text-black py-4 px-8 rounded text-white md:w-72 ">Get started with a pdf <span className="font-black text-xl">!</span></button>
      </div>
    </motion.div>
  )
}

//Article Image on the right
function ArticleLeft ({title, description}){
  const {ref, inView} = useInView({triggerOnce:false, threshold:0.2});

  return(
    <motion.div 
    ref={ref}
    initial={{opacity:0, x:-200}}
    animate={{opacity: inView ? 1: 0, x: inView ? 0: -200}}
    transition={{ duration: 0.5, ease: "easeIn"}}
    className="md:p-16 flex flex-col md:flex-row gap-8">

      
      <div className="content text-balance md:w-1/2 md:text-left flex flex-col gap-8 dark:text-white ">
        <p className="text-8xl tex">{title}</p>
        <p>{description}</p>
        <button className="bg-blue-600 dark:bg-slate-100 dark:text-black py-4 px-8 rounded text-white md:w-72 ">Get started with a pdf <span className="font-black text-xl">!</span></button>
      </div>

      <div className="gif h-full bg-slate-300 md:w-1/2 rounded overflow-hidden relative">
        {/* <Image src="https://cdn.dribbble.com/users/729829/screenshots/3088470/galshir-pen-tool-creation.gif" layout="fill" className="object-cover"> </Image> */}
      </div>
    </motion.div>
  )
}