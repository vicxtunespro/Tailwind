import React from 'react'
import Link from 'next/link'

export default function DesktopMenu() {
  return (
    <div className="desktop-menu w-full flex h-12 items-center justify-between bg-slate-800 bg-opacity-30 px-8 fixed top-0 left-0 z-20">
        <div className="logo">LOGO</div>
        <div className="Linknks">
        <ul className="flex gap-4 text-white">
            <Link href="/">Home</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/portfolio">PortfoLinko</Link>
            <Link href="/services">services</Link>
            <Link href="/contect">Contact</Link>
        </ul>
        </div>
        <div className="socials flex gap-4">
        <p>#</p>
        <p>#</p>
        <p>#</p>
        </div>
    </div>
  )
}
