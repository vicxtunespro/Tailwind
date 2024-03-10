"use client"
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function PriceSection() {
  return (
    <div className='mb-8'>
        <div className="styled-title mb-8">
            <p className="text-3xl font-bold dark:text-white">Pricing</p>
            <div className="h-0.5 w-32 bg-slate-200 dark:bg-slate-500 after:block after:h-full after:w-8 after:bg-blue-500 dark:after:bg-slate-200 after:content-['']"></div>
        </div>
        <div
        className="flex flex-col md:flex-row justify-center gap-4"
        >
            <PriceCard/>
            <PriceCard/>
            <PriceCard/>
        </div>
    </div> 
  )
}
function PriceCard() {
    const {ref, inView} = useInView({triggerOnce:false, threshold: 0.2})

    return(
        <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }} // Initial state of the element
        animate={{ opacity: inView? 1: 0, y: 0 }} // Animation when the element enters the viewport
        transition={{ duration: 0.5 }} // Duration of the animation

        className="price-card max-w-80  h-92 bg-white dark:bg-slate-700 rounded-lg shadow-lg border border-slate-200 dark:border-slate-500">
            <div className="content p-8">
                <p className="title text-2xl font-bold mb-4 dark:text-white">Lorem ipsum </p>
                <p className="price text-4xl font-bold dark:text-white">$65<em className="text-normal font-light text-sm pl-3 dark:text-white">/period</em></p>
                <button className="mt-4 bg-smoky dark:bg-slate-300 dark:text-slate-800 py-4 px-8 shadow-lg text-white">Enroll now</button>
                <p className="description my-8 leading-8 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi molestias dicta laudantium.
                </p>
            </div>
        </motion.div>
    )
}