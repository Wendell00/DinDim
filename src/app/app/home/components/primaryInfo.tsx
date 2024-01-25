'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { TbPaperclip } from "react-icons/tb";
import { BiTransfer } from "react-icons/bi";
import { HiOutlineSun } from "react-icons/hi2";

function GetHoursForMessage(){
    const [hora, setHora] = useState(new Date());
    return {
        text: hora.getHours() < 12 ? 'Bom dia' : (hora.getHours() < 18 ? 'Boa tarde' : 'Boa noite'),
        image: hora.getHours() < 12 ? '/cloud.svg' : (hora.getHours() < 18 ? '/sun.svg' : '/moon.svg')
    }
}

export default function PrimaryInfo() {
  
  return (
    <div className='w-full h-[180px] bg-[#fff] rounded-md flex justify-between py-6 px-8'>
        <div className='w-[60%] h-full flex flex-col justify-between'>
            <div className='flex'>
                <div>
                    <p className='font-normal'>{GetHoursForMessage().text},</p>
                    <p className='font-bold'>Wendell</p>
                </div>
                <Image
                    src={GetHoursForMessage().image}
                    width={100}
                    height={100}
                    alt="Icon"
                    className="h-[40px] mt-[5px] ml-[-10px]"
                />
            </div>
            <div className='w-full flex justify-between'>
                <div className='w-[28%] h-[60px] shadow-lg rounded-md p-[4px]'>
                    <p className='text-center font-light text-[14px]'>receita mensal</p>
                    <p className='text-center font-semibold text-[#129e3f]'>R$ 0,00</p>
                </div>
                <div className='w-[28%] h-[60px] shadow-lg rounded-md p-[4px]'>
                    <p className='text-center font-light text-[14px]'>despesa mensal</p>
                    <p className='text-center font-semibold text-[#d72638]'>R$ 0,00</p>
                </div>
                <div className='w-[33%] h-[60px] shadow-lg rounded-md p-[4px] 
                flex items-center justify-center cursor-pointer hover:bg-[#eee] duration-300'>
                     <FaArrowTrendUp className="text-[30px] mr-[10px] text-[#444]"/>
                     <p className='text-center font-light text-[16px]'>ver relatórios</p>
                </div>
            </div>
        </div>
        <div className='w-[35%] h-full border-l px-4 flex flex-col justify-between'>
            <p className='font-semibold'>Acesso rápido</p>
            <div className='w-full flex justify-between h-[70%]'>
                <div className='w-[22%] h-full border rounded-md 
                flex flex-col justify-center items-center hover:bg-[#ddd] duration-300 cursor-pointer'>
                    <FiMinus className="text-[28px] text-[#d72638]"/>
                    <p className='text-[13px] font-light mt-[6px]'>DESPESA</p>
                </div>
                <div className='w-[22%] h-full border rounded-md 
                flex flex-col justify-center items-center hover:bg-[#ddd] duration-300 cursor-pointer'>
                    <FaPlus className="text-[28px] text-[#129e3f]"/>
                    <p className='text-[13px] font-light mt-[6px]'>RECEITA</p>
                </div>
                <div className='w-[22%] h-full border rounded-md 
                flex flex-col justify-center items-center hover:bg-[#ddd] duration-300 cursor-pointer'>
                    <BiTransfer className="text-[28px] text-[#afb1ac]"/>
                    <p className='text-[13px] font-light mt-[6px]'>TRANSF.</p>
                </div>
                <div className='w-[22%] h-full border rounded-md 
                flex flex-col justify-center items-center hover:bg-[#ddd] duration-300 cursor-pointer'>
                    <TbPaperclip className="text-[28px] text-secondary"/>
                    <p className='text-[13px] font-light mt-[6px]'>IMPORTAR</p>
                </div>
            </div>
        </div>
    </div>
  )
}
