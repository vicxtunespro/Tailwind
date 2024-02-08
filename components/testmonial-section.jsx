"use client"
import React from 'react'
import SectionHeader from './section-header'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Testimonial() {
  return (
    <div className="w-full">
        <SectionHeader title={"Testimonials"}/>
        <div className="test-card-group flex justify-start gap-8 overflow-x-auto overflow-y-hidden px-4 py-16 snap-x snap-mandatory" >
            <TestimonialCard />
            <TestimonialCard />
        </div>
    </div>
  )
}
function TestimonialCard(){
    const {ref, inView} = useInView({triggerOnce:false, threshold:0.2});

    return(
        <motion.div 
        ref={ref}
        initial={{x: 30, opacity: 0}}
        animate={{opacity: inView ? 1 : 0, x:0}}
        transition={{duration: 0.5, ease: "easeIn"}}

        className="h-98 flex-shrink-0 relative max-w-72 rounded-sm bg-white dark:bg-slate-700 p-8 shadow-xl border border-slate-100 dark:border-slate-500 snap-center">
            <div className="quotes absolute text-9xl text-slate-200">"</div>
            <div className="quotes absolute bottom-[-60px] right-5 text-9xl text-slate-200">"</div>
            <div className="img absolute left-[122px] top-[-40px] h-20 w-20 rounded-full bg-orange-400"></div>
            <div className="content mt-16">
                <p className='dark:text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In debitis, voluptatibus error saepe dolores dolor consequatur dignissimos odio vero laborum ipsa sit eveniet unde natus. Officia alias consectetur porro recusandae?</p>
                <p className="letter pt-8 font-bold dark:text-white">Client Name</p>
                <p className="text-sm font-light text-blue-500 dark:text-purple-200 ">Client Title</p>
            </div>
        </motion.div>
    )
}
