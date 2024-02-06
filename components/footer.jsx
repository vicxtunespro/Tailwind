import React from 'react'

export default function Footer() {
  return (
    <div className='bg-slate-200 dark:bg-slate-800 p-4 flex flex-col items-center justify-center md:justify-between md:flex-row'>
        <div className='flex gap-8 justify-center w-full md:1/2 md:justify-start dark:text-slate-100'>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>X/Twitter</p>
        </div>
        <div className='mt-4 dark:text-slate-100 md:flex md:w-1/2 md:justify-end'>
            <p>@ 2024 All rights resereved</p>
        </div>
    </div>
  )
}
