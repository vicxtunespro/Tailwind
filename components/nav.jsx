"use client"
import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin, FaXTwitter, FaInstagram, FaGithub} from "react-icons/fa6";
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from "next/legacy/image"


export default function MobileMenu() {
  const [clicked, setIsclicked] = useState(false);

    const handleClick = () =>{
      setIsclicked(!clicked);
    }
  

  return (
    <div>
      <div className='mobile-menu w-screen h-12 fixed top-0 bg-blue-600 text-white pl-8 pr-8 flex justify-between items-center z-20 shadow-lg'>
          <div className="bg-yellow-300 h-6 w-20 relative object-contain">
            <Image src="/logo.png" layout="fill"></Image>
          </div>
          <div className="toggler">
            <AiOutlineMenu  className={`${clicked ? 'active': ''} toggler`} onClick={handleClick}></AiOutlineMenu>
          </div>
      </div>
      <MenuBody showMenu = {clicked}/>
    </div>
  )
}
function MenuBody({showMenu}){
  return(
    <motion.div 
    initial={{x: showMenu ? 0 : 200}}
    animate={{x: showMenu ? 0 : 200}}
    transition={{duration: 0}}
    
    className={`${showMenu ? 'visible':'hidden'} nav h-full w-[80%] mt-12 bg-slate-50 z-10 fixed top-0 right-0 shadow-lg`}>
      <div className="detailed h-72 bg-slate-100 p-4 flex flex-col justify-center items-center">
        <div className="img w-32 h-32 bg-orange-300 rounded-full"></div>
        <p className="text-xl text-center font-bold tracking-3">Victor Nuwarimpa</p>
        <p className="text-lg text-center text-slate-400">Web Developer</p>
        <p className="text-xl w-24  flex justify-between text-slate-400">
          <a herf="#"><FaLinkedin/></a>
          <a herf="#"><FaInstagram/></a>
          <a herf="#"><FaXTwitter/></a>
          <a herf="#"><FaGithub/></a>
        </p>
      </div>
      <div className="as flex flex-col items-end px-8 py-16 gap-4 text-2xl">
        <Link href="/">About Me</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/portfolio">Portifolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </motion.div>
  )
}
