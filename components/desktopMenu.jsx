import React from 'react'
import Link from 'next/link'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function DesktopMenu() {
  return (
    <div className="desktop-menu w-full flex h-12 items-center justify-between bg-slate-800 bg-opacity-30 dark:bg-slate-200 px-8 fixed top-0 left-0 z-20">
        <div className="logo">LOGO</div>
        <div className="Linknks">
        <ul className="flex gap-4 text-slate-800 dark:text-slate-800">
            <Link href="/">Home</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/services">services</Link>
            <Link href="/contect">Contact</Link>
        </ul>
        </div>
        <div className="socials flex gap-4 dark:text-slate-800">
        <FaLinkedinIn/>
        <FaInstagram/>
        <FaXTwitter/>
        <FaGithub/>
        </div>
    </div>
  )
}
