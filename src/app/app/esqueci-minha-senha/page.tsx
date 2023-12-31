import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'

const myFont = localFont({ src: '../../fonts/semdisplay.woff' })

export default function RecoveryPassword() {
  return (
    <>
    <div className='w-screen h-screen bg-[#053B50] flex flex-col items-center'>
        <Link href="/">
          <div className='w-full h-[100px] flex justify-center items-end'>
          <h1 className={`${myFont.className} text-[3em] text-white mr-[10px]`}> <span className='text-[#64ccc5]'>Din</span> Dim</h1>
              <Image
              src={'/logoIcon.png'}
              width={100}
              height={100}
              alt='Din Dim'
              className='h-[70px] w-auto'
              />
          </div>
        </Link>
        <div className='w-[495px] h-[auto] bg-[#fff] mt-[20px] rounded-lg px-8'>
            <h2 className='text-center text-3xl font-semibold text-[#444] mt-[40px] mb-[20px]'>Recuperar senha</h2>
            <form action="" className='flex flex-col w-full h-auto '>
                <label htmlFor="" className='mt-[10px]'>Seu e-mail</label>
                <input type="text" className='w-full rounded-lg border border-[#eee] px-4 py-3 mt-[10px]'/>
            </form>
            <button className='w-full h-[50px] bg-[#053B50] rounded-lg text-white font-semibold mt-[20px] mb-[20px] hover:bg-[#053B50cc] duration-300'>Recuperar Senha</button>
        </div>
    </div>
    </>
  )
}
