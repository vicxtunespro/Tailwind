import React from 'react'

export default function HeroSection() {
  return (
    <div className='h-screen flex flex-col mt-8'>
        <div className="img h-1/2 bg-blue-100">
            <p>Image here</p>
        </div>
        <div className="profile py-8 px-4  dark:bg-slate-600 dark:bg-slate-800">
            <p className='text-xl text-slate-400 dark:text-slate-200'>Frontend - developer</p>
            <p className='mt-4 text-5xl font-bold dark:text-white'><span className='font-light'>Hi, I'm</span> Victor <br></br> Nuwarimpa.</p>
            <p className="description mt-8 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat, eveniet repellendus blanditiis ullam quam ipsa error illum dolores quo alias atque. Aliquam ipsa libero eligendi natus quae nulla exercitationem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde obcaecati delectus in. Reprehenderit placeat quaerat necessitatibus ab doloribus recusandae quia exercitationem, sint animi odio vel maxime in repellendus quam!</p>

            <div className='w-full mt-8 flex justify-between gap-4 '>
                <button className="w-1/2 py-4 px-8 bg-blue-600 text-white dark:bg-slate-900">Download CV</button>
                <button className="w-1/2 py-4 px-8  bg-white dark:bg-slate-900">Contact</button>
            </div>
        </div>
    </div>
  )
}
