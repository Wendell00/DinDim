'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import { IoCardOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import {motion} from 'framer-motion'

export default function GeneralCard() {
    const [altura, setAltura] = useState<number>(390);
    const [hoverComponent, setHoverComponent] = useState(false)

    const handleClick = () => {
      // Atualiza a altura da div ao clicar no ícone
      setAltura(altura === 110 ? 390 : 110);
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

  return (
    <div className={`divExpansivel w-[100%] bg-[#fff] rounded-md flex flex-col justify-between py-6 px-8`} 
    style={{ height: `${altura == 110 ? '110px' : '390px'}` }}
    onMouseEnter={()=> setHoverComponent(true)}
    onMouseLeave={()=> setHoverComponent(false)}>
        <div className='border-b w-full h-[70px] flex justify-between items-start'>
            <div className='h-[100%] flex justify-start items-start'>
                <div className='border-l-4 border-[#129e3f] h-[70%] flex flex-col px-4'>
                    <p className='text-[#888] text-[15px]'>Todas as faturas</p>
                    <div className='flex items-center'>
                        <p className='font-normal text-[#888]'>R$ <span className='font-semibold text-[#000]'>0,00</span></p>
                        <IoEyeOutline className="ml-[15px] text-[22px] text-[#666] cursor-pointer"/>
                    </div>
                </div>
            </div>
            <div className='flex h-[100%] items-start w-auto'>
                {hoverComponent ? 
                <motion.div
                variants={item}
                transition={{ delay: .1 }}
                initial="hidden"
                animate="show">
                    <IoMdArrowDropdown className="text-[25px] mt-[10px] hover:bg-[#eee] rounded-full cursor-pointer"
                    onClick={handleClick}/>
                </motion.div> : ''}
            </div>
        </div>
        {altura === 390 ?          
            <motion.div
            variants={item}
            transition={{ delay: .3 }}
            initial="hidden"
            animate="show">
                <div className={`flex h-[270px] flex-col justify-between`}>
                    <div className='h-[50%]'>
                        <p className='font-semibold mt-[20px] text-[17px]'>Meus cartões</p>
                        <div className='mt-[15px] flex items-center justify-center h-[100%]'>
                            <IoCardOutline className="text-[50px] text-[#ccc] mr-[12px]"/>
                            <p className='text-[17px] text-[#999] font-medium'>Adicione seu primeiro cartão</p>
                        </div>
                    </div>
                    <button className='w-full border-[1px] rounded-lg border-[#eee] 
                    py-[8px] text-[#999] hover:text-[#fff] hover:bg-primary duration-300'>
                        Gerenciar cartões
                    </button>
                </div>
            </motion.div> : ''}
    </div>
  )
}
