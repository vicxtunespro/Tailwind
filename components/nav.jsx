"use client"
import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import { AiOutlineMenu } from "react-icons/ai";


export default function MobileMenu() {
  const [clicked, setIsclicked] = useState(false);

    const handleClick = () =>{
      setIsclicked(!clicked);
    }
  

  return (
    <div>
      <div className='w-screen h-12 fixed top-0 bg-blue-600 text-white pl-8 pr-8 flex justify-between items-center z-20 shadow-lg'>
          <p>Logo</p>
          <AiOutlineMenu  className={`${clicked ? 'active': ''} toggler`} onClick={handleClick}></AiOutlineMenu>
      </div>
      <MenuBody showMenu = {clicked}/>
    </div>
  )
}
function MenuBody({showMenu}){
  return(
    <div className={`${showMenu ? 'visible':'hidden'} nav h-screen w-full mt-12 bg-slate-50 z-10 fixed left-0 top-4`}>
      <div className="detailed h-72 bg-slate-100 p-4 grid place-items-center">
        <div className="img w-32 h-32 bg-orange-300 rounded-full"></div>
        <p className="text-3xl font-black tracking-3">Victor Nuwarimpa</p>
        <p className="text-lg text-slate-400">Web Developer</p>
        <p className="text-xl w-24  flex justify-between text-slate-400">
          <em>$</em>
          <em>&</em>
          <em>@</em>
        </p>
      </div>
      <div className="links flex flex-col items-end px-8 py-16 gap-4 text-2xl">
        <a href="/">About Me</a>
        <a href="/resume">Resume</a>
        <a href="/portfolio">Portifolio</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  )
}
