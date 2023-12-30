import localFont from 'next/font/local'
import Image from 'next/image'

const myFont = localFont({ src: '../fonts/semdisplay.woff' })

export default function Navbar() {
    return (
      <nav className={"w-screen h-[70px] bg-[#053B50] flex justify-center"}>
        <div className='h-full w-[1200px] flex items-center justify-between'>
            <div className='flex items-center h-full'>
                <h1 className={`${myFont.className} text-[2.5em] text-white mr-[10px]`}> <span className='text-[#64ccc5]'>Din</span> Dim</h1>
                <Image
                    src={'/logoTypeGraphic.png'}
                    width={100}
                    height={100}
                    alt='Icon'
                    className='h-[75%] w-auto'
                />
            </div>
            <ul className='h-full w-[45%] flex justify-between items-center text-white text-sm'>
                <li>Inicio</li>
                <li>Controles</li>
                <li>Ferramentas</li>
                <li>Recursos</li>
                <li>Sobre nós</li>
                <li>Contato</li>
            </ul>
            <div className='h-full flex items-center text-white'>
                <p className='mr-[30px]'>Entrar</p>
                <button className='bg-[#64ccc5] px-4 py-2 rounded-lg'>Criar conta</button>
            </div>
        </div>
      </nav>
    )
  }
  