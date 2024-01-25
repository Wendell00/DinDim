'use client'

import localFont from 'next/font/local'
import Image from 'next/image'
import {FaGear, FaBell, FaCircleUser} from 'react-icons/fa6'
import { LuAlignJustify, LuX } from "react-icons/lu";
import { useState } from 'react';
import Link from 'next/link'

const myFont = localFont({ src: '../../../fonts/semdisplay.woff' })

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  interface NavLinksType {
    link: string;
    href: string;
  }

  const navlinks:  NavLinksType[] = [
    {
        link: 'Visão Geral',
        href: 'home',
    },
    {
        link: 'Lançamentos',
        href: 'lancamentos',
    },
    {
        link: 'Relatórios',
        href: 'relatorios',
    },
    {
        link: 'Controle de limite',
        href: 'controle-de-limite',
    },
  ]

  return (
    <>
        <nav className="w-screen h-[52px] bg-primary flex justify-center relative z-20">
            <div className="h-full w-full max-w-[1200px] px-4 flex items-center justify-between">
                <div className="flex items-center h-full cursor-pointer">
                <h1 className={`${myFont.className} text-[2.2em] text-white mr-4`}>
                    <span className="text-[#64ccc5]">Din</span> Dim
                </h1>
                <Image
                    src={'/logoIcon.png'}
                    width={100}
                    height={100}
                    alt="Icon"
                    className="h-[75%] w-auto"
                />
                </div>
                <ul className="hidden md:flex h-full w-[45%] justify-between items-center text-white text-sm">
                    {navlinks.map((navlink) => (
                        <Link href={navlink.href}>
                            <li
                                key={navlink.link}
                            >
                            {navlink.link}
                            </li>
                        </Link>
                    ))}
                </ul>
                <div className="h-full hidden md:flex items-center text-white">
                <FaGear className="w-auto cursor-pointer h-[37%] mr-4" />
                <FaBell className="w-auto cursor-pointer h-[37%] mr-4" />
                <FaCircleUser className="w-auto cursor-pointer h-[50%]" />
                </div>
                <div className='h-full flex md:hidden items-center text-white' onClick={handleToggleSidebar}>
                    {isSidebarOpen ? 
                    <LuX className="w-auto cursor-pointer h-[60%] mr-8"/> : 
                    <LuAlignJustify className="w-auto cursor-pointer h-[60%] mr-8"/>}
                </div>
            </div>
        </nav>
        {isSidebarOpen ? 
            <div className='absolute w-screen min-h-screen h-auto bg-[#00000077] z-30 top-0 flex justify-end'>
                <aside className='w-[280px] min-h-screen bg-white flex flex-col justify-between px-4'>
                    <div className='flex flex-col'>
                        <FaCircleUser className="text-primary w-auto cursor-pointer h-[85px] mt-[30px]" />
                        <h2 className='text-[20px] text-[#000] text-center font-medium mt-[15px]'>Username</h2>
                        <ul className='flex flex-col w-full h-auto pt-[10px]'>
                            {navlinks.map((navlink) => (
                                <Link href={navlink.href}>
                                    <li
                                        key={navlink.link}
                                        className='border-b border-[#eee] px-4 pb-4 hover:text-primary mt-[30px]'
                                    >
                                    {navlink.link}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className='w-full h-auto flex justify-start items-center border-b border-[#eee] px-4 pb-4 mt-[15px] cursor-pointer'>
                            <FaBell className="w-auto cursor-pointer h-[28px] mr-4 text-primary" />
                            Notificações
                        </div>
                        <div className='w-full h-auto flex justify-start items-center border-b border-[#eee] px-4 pb-4 mt-[15px] cursor-pointer'>
                            <FaGear className="w-auto cursor-pointer h-[28px] mr-4 text-primary" />
                            Configurações
                        </div>
                    </div>
                </aside>
            </div>
            : ''
        }
    </>
  );
};

export default Navbar;
