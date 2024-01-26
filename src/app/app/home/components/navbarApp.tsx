'use client'

import localFont from 'next/font/local'
import Image from 'next/image'
import {FaGear, FaBell, FaCircleUser} from 'react-icons/fa6'
import { FaMoon, FaSun } from "react-icons/fa";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import ModalUser from './modalUser';
import ModalNotification from './modalNotification';
import { FormContext } from '@/app/contexts/infoContext'

const myFont = localFont({ src: '../../../fonts/semdisplay.woff' })

interface DocumentWithBodyClassList extends Document {
    body: HTMLBodyElement & {
      classList: DOMTokenList;
    };
}

const Navbar = () => { 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [modalUser, setModalUser] = useState(false)
    const [modalNotification, setModalNotification] = useState(false)
    const [modalConfig, setModalConfig] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const {name} = useContext(FormContext)

    useEffect(() => {
    const documentWithClassList = document as DocumentWithBodyClassList;

    if (isSidebarOpen) {
        documentWithClassList.body.classList.add("overflow-y-hidden");
    } else {
        // documentWithClassList.body.classList.remove("overflow-y-hidden");
    }
    }, [isSidebarOpen]);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        // Acessar a tag <html>
        const htmlElement = document.querySelector('html');
    
        // Exemplo de manipulação
        if (htmlElement && darkMode) {
          htmlElement.classList.add('dark')
        }else htmlElement?.classList.remove('dark')
    }, [darkMode]);

    interface NavLinksType {
        link: string;
        href: string;
    }

  const navlinks:  NavLinksType[] = [
    {
        link: 'Visão Geral',
        href: '/app/home',
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
                <h1 className={`${myFont.className}  text-[1.6em] sm:text-[2.2em] text-white mr-4`}>
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
                        <Link href={navlink.href} key={navlink.link}>
                            <li
                            >
                            {navlink.link}
                            </li>
                        </Link>
                    ))}
                </ul>
                <div className="h-full hidden md:flex items-center text-white">
                    {darkMode ?
                    <FaSun className="w-auto cursor-pointer h-[37%] mr-4" onClick={()=> setDarkMode(!darkMode)}/>
                    :
                    <FaMoon className="w-auto cursor-pointer h-[37%] mr-4" onClick={()=> setDarkMode(!darkMode)}/>}
                    <FaGear className="w-auto cursor-pointer h-[37%] mr-4" />
                    <div className='h-full relative flex items-center'>
                        <FaBell className="w-auto cursor-pointer h-[37%] mr-4"
                            onMouseEnter={()=>setModalNotification(true)}
                        />
                        {
                            modalNotification && (
                                <div onMouseLeave={()=>setModalNotification(false)}> <ModalNotification/> </div>
                            )
                        }
                    </div>
                    <div className='h-full relative flex items-center'>
                        <FaCircleUser className="w-auto cursor-pointer h-[50%]" 
                            onMouseEnter={()=>setModalUser(true)}
                        />
                        {
                            modalUser && (
                                <div onMouseLeave={()=>setModalUser(false)}> <ModalUser/> </div>
                            )
                        }
                    </div>
                </div>
                <div className='h-full flex md:hidden items-center text-white' onClick={handleToggleSidebar}>
                    {isSidebarOpen ? 
                    <LuX className="w-auto cursor-pointer h-[60%] mr-2"/> : 
                    <LuAlignJustify className="w-auto cursor-pointer h-[60%] mr-2"/>}
                </div>
            </div>
        </nav>
        {isSidebarOpen ? 
            <div className='absolute w-screen min-h-screen h-auto bg-[#00000077] z-30 top-0 flex justify-end overflow-y-auto'>
                <aside className='w-[280px] min-h-screen bg-white flex flex-col justify-between px-4'>
                    <div className='flex flex-col'>
                        <FaCircleUser className="text-primary w-auto cursor-pointer h-[85px] mt-[30px]" />
                        <h2 className='text-[20px] text-[#000] text-center font-medium mt-[15px]'>{name}</h2>
                        <ul className='flex flex-col w-full h-auto pt-[10px]'>
                            {navlinks.map((navlink) => (
                                <Link href={navlink.href} key={navlink.link}>
                                    <li
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
