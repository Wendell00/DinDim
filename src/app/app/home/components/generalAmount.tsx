'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import {motion} from 'framer-motion'
import { FormContext } from '@/app/contexts/infoContext'

export default function GeneralAmout() {
    // Estado para colocar uma altura inicial no componente
    const [hoverComponent, setHoverComponent] = useState(false)
    // Estado para verificar se o mouse está em cima do componente para mostar a arrow para o dropdown
    const [altura, setAltura] = useState<number>(340);
    // Estado para habilitar/desabilitar a visibilidade do saldo
    const {amountVisible, setAmountVisible} = useContext(FormContext)

    const handleClick = () => {
      // Atualiza a altura da div ao clicar no ícone
      setAltura(altura === 110 ? 340 : 110);
    };

    // variante para a animação do motion
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }
  
  return (
    <div className={`divExpansivel w-[100%] bg-[#fff] dark:bg-[#333] rounded-md flex flex-col justify-between py-6 px-8`} 
    style={{ height: `${altura == 110 ? '110px' : '340px'}` }}
    onMouseEnter={()=> setHoverComponent(true)}
    onMouseLeave={()=> setHoverComponent(false)}>
        <div className='border-b w-full h-[70px] flex justify-between items-start'>
        <div className='h-[100%] flex justify-start items-start'>
                <div className='border-l-4 border-[#129e3f] h-[70%] flex flex-col px-4 pb-4'>
                    <p className='text-[#888] text-[15px] dark:text-[#fff]'>Saldo Geral</p>
                    <div className='flex items-center'>
                        <p className='font-normal text-[#888]'>R$ <span className='font-semibold text-[#000] dark:text-[#fff]'>
                            {amountVisible ? '0,00' : '-----'}
                        </span></p>
                        {amountVisible ? 
                        <IoEyeOutline className="ml-[15px] text-[22px] text-[#666] cursor-pointer"
                        onClick={() => setAmountVisible(!amountVisible)}/>
                        :
                        <IoEyeOffOutline className="ml-[15px] text-[22px] text-[#666] cursor-pointer"
                        onClick={() => setAmountVisible(!amountVisible)}/>
                        }
                    </div>
                </div>
            </div>
            <div className='flex h-[100%] items-start'>
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
        {altura === 340 ?          
            <motion.div
            variants={item}
            transition={{ delay: .3 }}
            initial="hidden"
            animate="show">
                <div className='h-[260px] flex flex-col justify-between'>
                    <div>
                        <p className='font-semibold mt-[20px] text-[17px] dark:text-[#fff]'>Minhas contas</p>
                        <div className='mt-[15px] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <div className='h-[50px] w-[50px] rounded-full bg-[#eee] flex items-center justify-center'>
                                    <FaWallet className="text-[25px]"/>
                                </div>
                                <div className='flex flex-col px-4'>
                                    <p className="text-[15px] font-semibold dark:text-[#fff]">Conta inicial</p>
                                    <p className="text-[15px] font-light dark:text-[#fff]">Conta manual</p>
                                </div>
                            </div>
                            <p className='font-semibold text-secondary'>
                                R$ {amountVisible ? ' 0,00' : '-----'}
                            </p>
                        </div>
                    </div>
                    <button className='w-full border-[1px] rounded-lg border-[#eee] 
                    py-[8px] text-[#999] hover:text-[#fff] hover:bg-primary duration-300 mb-[35px]'>
                        Gerenciar contas
                    </button>
                </div>
            </motion.div> : ''}
    </div>
  )
}
