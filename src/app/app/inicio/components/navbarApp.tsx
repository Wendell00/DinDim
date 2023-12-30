import localFont from 'next/font/local'
import Image from 'next/image'
import {FaGear, FaBell, FaCircleUser} from 'react-icons/fa6'

const myFont = localFont({ src: '../../../fonts/semdisplay.woff' })

export default function Navbar() {
    return (
      <nav className={"w-screen h-[52px] bg-[#053B50] flex justify-center"}>
        <div className='h-full w-[1200px] flex items-center justify-between'>
            <div className='flex items-center h-full cursor-pointer'>
                <h1 className={`${myFont.className} text-[2.2em] text-white mr-[10px]`}> <span className='text-[#64ccc5]'>Din</span> Dim</h1>
                <Image
                    src={'/logoIcon.png'}
                    width={100}
                    height={100}
                    alt='Icon'
                    className='h-[75%] w-auto'
                />
            </div>
            <ul className='h-full w-[45%] flex justify-between items-center text-white text-sm'>
                <li>Visão Geral</li>
                <li>Lançamentos</li>
                <li>Relatórios</li>
                <li>Controle de limite</li>
            </ul>
            <div className='h-full flex items-center text-white'>
                <FaGear className='w-auto cursor-pointer h-[37%] mr-[15px]'/>
                <FaBell className='w-auto cursor-pointer h-[37%] mr-[40px]'/>
                <FaCircleUser className='w-auto cursor-pointer h-[50%]'/>
            </div>
        </div>
      </nav>
    )
  }
  