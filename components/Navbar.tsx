"use client"

import React from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai'
import { useState } from "react"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }
  
    return (
    <nav className="fixed left-[5%] right-[5%] w-[90%] h-10 top-5 shadow-xl bg-neutral-100 dark:bg-[rgb(30,30,40)]">
      <div className="flex justify-between items-center h-full w-full px-16 2xl:px-16">
        <Link href="/">
            <div className="text-xl">QcABA</div>
        </Link>
        
        <div className="hidden sm:flex">
            <ul className="hidden sm:flex">
                <Link href="/page1">
                    <li className="ml-10 hover:border-b text-l">page1</li>
                </Link>
                <Link href="/page2">
                    <li className="ml-10 hover:border-b text-l">page2</li>
                </Link>
                <Link href="/page3">
                    <li className="ml-10 hover:border-b text-l">page3</li>
                </Link>
            </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className={
        menuOpen
        ? "fixed right-0 top-0 w-[50%] sm:hidden h-screen bg-[#eaeaea] dark:bg-[#262626] p-10 ease-in duration-500 transform translate-x-0"
        : "fixed right-0 top-0 w-[50%] sm:hidden h-screen bg-[#eaeaea] dark:bg-[#262626] p-10 ease-in duration-500 transform translate-x-full"
      }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
            <ul>
                <Link href="/">
                    <li
                        onClick={() => setMenuOpen(false)}
                        className="py-4 cursor-pointer"
                    >
                        Home
                    </li>
                </Link>
                <Link href="/page1">
                    <li
                        onClick={() => setMenuOpen(false)}
                        className="py-4 cursor-pointer"
                    >
                        page1
                    </li>
                </Link>
                <Link href="/page2">
                    <li
                        onClick={() => setMenuOpen(false)}
                        className="py-4 cursor-pointer"
                    >
                        page2
                    </li>
                </Link>
                <Link href="/page3">
                    <li
                        onClick={() => setMenuOpen(false)}
                        className="py-4 cursor-pointer"
                    >
                        page3
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