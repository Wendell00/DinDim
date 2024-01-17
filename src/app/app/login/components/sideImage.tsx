'use client'

import localFont from 'next/font/local'
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css';

const myFont = localFont({ src: '../../fonts/semdisplay.woff' })

export default function SideImage({page}: any) {
    
  return (
        <div className='w-[55%] h-screen bg-[#053B50] flex justify-center items-center relative'>
            <Image
            src={'/loginImage.jpg'}
            width={900}
            height={900}
            alt='Din Dim'
            className='h-auto w-full opacity-[6%] absolute z-10'
            />

            <div className='w-full h-full flex flex-col justify-center items-center cursor-pointer z-20 '>
                <div className='w-full h-[100px] flex items-center justify-center'>
                    <h1 className={`${myFont.className} text-[4em] text-white mr-[10px]`}> <span className='text-[#64ccc5]'>Din</span> Dim</h1>
                        <Image
                        src={'/logoIcon.png'}
                        width={100}
                        height={100}
                        alt='Din Dim'
                        className='h-[110px] w-auto mt-[-15px]'
                        />
                </div>
            </div>
        </div>
  )
}
