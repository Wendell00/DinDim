'use client'

import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {motion} from 'framer-motion'

export default function BillsToReceive() {
    // Estado para colocar uma altura inicial no componente
    const [altura, setAltura] = useState<number>(260);
    // Estado para verificar se o mouse está em cima do componente para mostar a arrow para o dropdown
    const [hoverComponent, setHoverComponent] = useState(false)

    const handleClick = () => {
      // Atualiza a altura da div ao clicar no ícone
      setAltura(altura === 90 ? 260 : 90);
    };

    // animação para o motion 
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

  return (
    <div className={`divExpansivel w-[100%] bg-[#fff] dark:bg-[#333] rounded-md flex flex-col justify-between py-6 px-8 mt-[20px]`} 
    style={{ height: `${altura == 90 ? '90px' : '260px'}` }}
    onMouseEnter={()=> setHoverComponent(true)}
    onMouseLeave={()=> setHoverComponent(false)}>
        <div className='w-full h-[50px] flex justify-between items-start'>
            <div className='h-[100%] flex justify-start items-start'>
                <p className='font-semibold mt-[10px] text-[17px] dark:text-[#fff]'>Contas a receber</p>
            </div>
            <div className='flex h-[100%] items-start w-auto'>
                {hoverComponent ? 
                <motion.div
                variants={item}
                transition={{ delay: .1 }}
                initial="hidden"
                animate="show">
                    <IoMdArrowDropdown className="text-[25px] mt-[10px] hover:bg-[#eee] rounded-full cursor-pointer dark:text-[#fff]"
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
                <div className='flex h-[200px] flex-col justify-between'>
                        <div className='mt-[15px] flex items-center justify-center h-[100%]'>
                            <p className='text-[17px] text-[#999] font-medium'>No momento você não possui contas a receber</p>
                        </div>
                </div>
            </motion.div> : ''}
    </div>
  )
}
