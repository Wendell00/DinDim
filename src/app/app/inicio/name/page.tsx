'use client'

import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../../fonts/semdisplay.woff' })

export default function Name() {
  return (
    <>
    <div className='w-screen h-mainApp bg-[#ddd] flex flex-col items-center justify-center'>
        <div className='w-[495px] h-[auto] bg-[#fff] mt-[20px] rounded-lg px-8'>
            <h2 className='text-center font-semibold text-2xl mt-[30px] text-[#333]'>Coloque um Nome</h2>
            <form action="" className='flex flex-col w-full h-auto '>
                <label htmlFor="" className='mt-[10px]'>Seu nome ou apelido</label>
                <input type="text" className='w-full rounded-lg border border-[#eee] px-4 py-3 mt-[10px]'/>
            </form>
            <button className='w-full h-[50px] bg-[#053B50] rounded-lg text-white font-semibold mt-[20px] mb-[20px] hover:bg-[#053B50cc] duration-300'>Continuar</button>
        </div>
    </div>
    </>
  )
}
