'use client'

import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {motion} from 'framer-motion'

export default function InvestmentTips() {
    const [altura, setAltura] = useState<number>(260);
    const [hoverComponent, setHoverComponent] = useState(false)

    const handleClick = () => {
      // Atualiza a altura da div ao clicar no ícone
      setAltura(altura === 90 ? 260 : 90);
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

  return (
    <div className={`divExpansivel w-[100%] bg-[#fff] rounded-md flex flex-col justify-between py-6 px-8 mt-[20px]`} 
    style={{ height: `${altura == 90 ? '90px' : '260px'}` }}
    onMouseEnter={()=> setHoverComponent(true)}
    onMouseLeave={()=> setHoverComponent(false)}>
        <div className='w-full h-[50px] flex justify-between items-start'>
            <div className='h-[100%] flex justify-start items-start'>
                <p className='font-semibold mt-[10px] text-[17px]'>Dicas de Investimento</p>
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
        {altura === 260 ?          
            <motion.div
            variants={item}
            transition={{ delay: .3 }}
            initial="hidden"
            animate="show">
                <div className={`flex h-[260px] flex-col justify-between`}>
                    <div className='h-[50%]'>
                        <div className='mt-[15px] flex items-center justify-center h-[100%]'>
                            <p className='text-[17px] text-[#999] font-medium'>No momento não há dicas de investimento.</p>
                        </div>
                    </div>
                </div>
            </motion.div> : ''}
    </div>
  )
}
