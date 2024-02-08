"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
    <motion.div 
    initial={{scale:1.5, opacity: 0}}
    animate={{scale: 1, opacity: 1}}
    transiiton={{duration: 0.5, ease:'ease-in'}}
    className='flex flex-col mt-8 md:flex-row'
    >
        <div className="img md:w-1/2 bg-blue-100">
            <p>Image here</p>
        </div>
        <div className="profile md:w-1/2 py-8 px-4 dark:bg-slate-600">
            <p className='text-xl text-slate-500 dark:text-slate-200'>Frontend - developer</p>
            <p className='mt-4 text-5xl font-bold dark:text-white'><span className='font-light'>Hi, I'm</span> Victor <br></br> Nuwarimpa.</p>
            <p className="description mt-8 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat, eveniet repellendus blanditiis ullam quam ipsa error illum dolores quo alias atque. Aliquam ipsa libero eligendi natus quae nulla exercitationem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde obcaecati delectus in. Reprehenderit placeat quaerat necessitatibus ab doloribus recusandae quia exercitationem, sint animi odio vel maxime in repellendus quam!</p>

            <div className='w-full mt-8 flex justify-between gap-4 '>
                <button className="w-1/2 py-4 px-4 bg-blue-600 dark:bg-slate-800  text-white shadow-lg">
                  <a href="/full-stack.pdf" download >Download CV</a>
                </button>
                <button className="w-1/2 py-4 px-8  bg-white dark:bg-slate-200
                 shadow-lg"><a href="tel:0758019072">Contact me</a></button>
            </div>
        </div>
    </motion.div>
  )
}
