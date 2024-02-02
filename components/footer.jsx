import React from 'react'

export default function Footer() {
  return (
    <div className='bg-slate-200 dark:bg-slate-800 py-4 grid place-items-center'>
        <div className='flex gap-8 justify-center w-full dark:text-slate-100'>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>X/Twitter</p>
        </div>
        <div className='mt-4 dark:text-slate-100'>
            <p>@ 2024 All rights resereved</p>
        </div>
    </div>
  )
}
