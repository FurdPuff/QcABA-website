"use client"

import React from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineInstagram, AiOutlineMail, AiOutlineClose} from 'react-icons/ai'
import { useState } from "react"
import Login from "@/components/Login"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }
  
    return (
    <nav className="fixed left-[2%] right-[2%] w-[96%] h-12 top-5 bg-white dark:bg-[rgb(50,50,60)]" style={{zIndex: '999'}}>
      <div className="flex justify-between items-center h-full w-full px-16 2xl:px-16">
        <Link href="/">
            <div className="text-xl">QcABA</div>
        </Link>
        
        <div className="hidden lg:flex">
            <ul className="hidden lg:flex">
                <Link href="/">
                    <li className="ml-10 hover:border-b hover:text-cyan-400 transition-colors duration-400">Home</li>
                </Link>
                <Link href="/about">
                    <li className="ml-10 hover:border-b hover:text-cyan-400 transition-colors duration-400">About</li>
                </Link>
                <Link href="/aba">
                    <li className="ml-10 hover:border-b hover:text-cyan-400 transition-colors duration-400">ABA</li>
                </Link>
                <Link href="/events">
                    <li className="ml-10 hover:border-b hover:text-cyan-400 transition-colors duration-400">Events</li>
                </Link>
                <Link href="/videos">
                    <li className="ml-10 hover:border-b hover:text-cyan-400 transition-colors duration-400">Videos</li>
                </Link>
                <Link href="/memberships">
                    <li className="ml-10 hover:border-b hover:text-cyan-400 transition-colors duration-400">Memberships</li>
                </Link>
                <Link href="/groups">
                    <li className="ml-10 hover:border-b hover:text-cyan-400 transition-colors duration-400">Groups</li>
                </Link>
                <Login />
            </ul>
        </div>
        <div onClick={handleNav} className="lg:hidden cursor-pointer pr-7">
            <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className={
        menuOpen
        ? "fixed right-0 top-0 w-[50%] lg:hidden h-screen bg-[#eaeaea] dark:bg-[#262626] p-10 ease-in duration-500 transform translate-x-0"
        : "fixed right-0 top-0 w-[50%] lg:hidden h-screen bg-[#eaeaea] dark:bg-[#262626] p-10 ease-in duration-500 transform translate-x-full"
      }
      >
        <div className="flex w-full items-center justify-end cursor-pointer" onClick={handleNav}>
            <AiOutlineClose size={25} />
        </div>
        <div className="flex-col py-4 text-xl">
            <ul>
                <Link href="/">
                    <li
                        onClick={() => setMenuOpen(false)}
                        className="py-4 cursor-pointer"
                    >
                        Home
                    </li>
                </Link>
                <Link href="/about">
                    <li
                        onClick={() => setMenuOpen(false)}
                        className="py-4 cursor-pointer"
                    >
                        About
                    </li>
                </Link>
                <Link href="/aba">
                    <li
                        onClick={() => setMenuOpen(false)}
                        className="py-4 cursor-pointer"
                    >
                        ABA
                    </li>
                </Link>
                <Link href="/events">
                    <li
                        onClick={() => setMenuOpen(false)}
                        className="py-4 cursor-pointer"
                    >
                        Events
                    </li>
                </Link>
                <Link href="/videos">
                    <li
                        onClick={() => setMenuOpen(false)}
                        className="py-4 cursor-pointer"
                    >
                        Videos
                    </li>
                </Link>
                <Link href="/memberships">
                    <li
                        onClick={() => setMenuOpen(false)}
                        className="py-4 cursor-pointer"
                    >
                        Memberships
                    </li>
                </Link>
                <Link href="/groups">
                    <li
                        onClick={() => setMenuOpen(false)}
                        className="py-4 cursor-pointer"
                    >
                        Groups
                    </li>
                </Link>
            </ul>
        </div>
       <div className="flex flex-row justify-around pt-8 items-center">
        <Link href="https://www.instagram.com/qcaba1/">
            <AiOutlineInstagram size={65} className="cursor-pointer" />
        </Link>
        <Link href="mailto:info@qcaba.org">
            <AiOutlineMail size={65} className="cursor-pointer" />
        </Link>
       </div>
      </div>
    </nav>
  )
}

export default Navbar