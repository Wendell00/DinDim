'use client'

import {FaCircleUser} from 'react-icons/fa6'
import { IoMdArrowDropup } from "react-icons/io";
import { FormContext } from '@/app/contexts/infoContext';
import { useContext } from 'react';

export default function ModalUser() {
    const {name} = useContext(FormContext)
    return(
        <>
            <div className="w-[215px] h-[230px] bg-[#ffffff] dark:bg-[#333] absolute top-[50px] rounded-lg right-[-6px] 
            flex flex-col items-center p-6 shadow-xl">
                    <IoMdArrowDropup className="absolute top-[-22px] text-[#fff] text-[38px] right-[0px]"/>
                    <FaCircleUser className="text-primary text-[65px] dark:text-[#fff]"/>
                    <p className='font-semibold mt-[10px] text-[#000] dark:text-[#fff]'>Wendell</p>
                    <div className='border-t border-[#bbb] h-[40px] w-full mt-[20px] flex flex-col items-center'>
                        <p className='font-medium cursor-pointer text-[#888] hover:text-primary mt-[10px] dark:text-[#fff]'>
                            Minha conta
                        </p>
                        <p className='font-medium cursor-pointer text-[#888] hover:text-primary mt-[10px] dark:text-[#fff]'>
                            Sair
                        </p>
                    </div>

            </div>
        </>
    )
}