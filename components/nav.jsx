import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";


export default function MobileMenu() {
  return (
    <div className='w-screen h-12 fixed top-0 bg-blue-600 dark:bg-slate-900 text-white pl-8 pr-8 flex justify-between items-center'>
        <p>Logo</p>
        <AiOutlineMenu/>
    </div>
  )
}
