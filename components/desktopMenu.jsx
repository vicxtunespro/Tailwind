import React from 'react'
import Link from 'next/link'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function DesktopMenu() {
  return (
    <div className="desktop-menu w-full flex h-12 items-center justify-between bg-smoky dark:bg-slate-200 px-8 fixed top-0 left-0 z-20">
        <p className='text-xl text-slate-100'><span className='font-black text-xl'>VIC</span>IT<span className='font-black text-sm'>UG</span> </p>
        <div className="Linknks">
        <ul className="flex gap-4 text-slate-100 text-sm font-extralight dark:text-slate-800">
            <Link href="/">Home</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/services">services</Link>
            <Link href="/contact">Contact</Link>
        </ul>
        </div>
        <div className="socials flex gap-4 text-slate-100 dark:text-slate-800">
        <FaLinkedinIn/>
        <FaInstagram/>
        <FaXTwitter/>
        <FaGithub/>
        </div>
    </div>
  )
}
