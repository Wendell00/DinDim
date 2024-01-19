'use client'

import localFont from 'next/font/local'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const myFont = localFont({ src: '../../../fonts/semdisplay.woff' })

export default function LoginComponent({ page }: any) {
    const [facebookHover, setFacebookHover] = useState(false)
    const [googleHover, setGoogleHover] = useState(false)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("")

    const handlePage = () => {
        page(1);
    };
    
  return (
    <>
        <div className='w-[100%] h-[auto]'>
            <h2 className='text-center font-semibold text-2xl mt-[30px] text-[#333]'>Acesse sua conta</h2>
            <div className={`${facebookHover ? 'bg-[#3b5998] border-[#3b599890]' : 'bg-[#fff] border-[#eee]'} w-full border rounded-lg px-4 py-3 flex items-center cursor-pointer mt-[25px] duration-300`} onMouseEnter={() =>{setFacebookHover(true)}} onMouseLeave={() =>{setFacebookHover(false)}}><FaFacebookF className={`${facebookHover ? 'invisible' : 'visible'} text-[#3b5998] text-2xl `}/><div className='w-full'><p className={`${facebookHover ? 'text-[#fff]' : 'text-[#000]'} text-center font-semibold`}>Entre com o Facebook</p></div></div>
            <div className={`${googleHover ? 'bg-[#EA4435] border-[#EA443590]' : 'bg-[#fff] border-[#eee]'} w-full border rounded-lg px-4 py-3 flex items-center cursor-pointer justify-center mt-[15px]`} onMouseEnter={() =>{setGoogleHover(true)}} onMouseLeave={() =>{setGoogleHover(false)}}><FcGoogle className={`${googleHover ? 'invisible' : 'visible'} text-2xl `}/><div className='w-full'><p className={`${googleHover ? 'text-[#fff]' : 'text-[#000]'} text-center font-semibold`}>Entre com o Google</p></div></div>
            <div className='relative w-full mt-[25px] flex justify-center'>
                <p className='bg-[#fff] text-center relative z-30 w-[35px] text-[#444]'>ou</p>
                <div className='w-full h-[1px] bg-[#bbb] absolute bottom-[10px] z-20'></div>
            </div>
            <form action="" className='flex flex-col w-full h-auto '>
                <label htmlFor="" className='mt-[10px]'>Seu e-mail</label>
                <input type="text" className='w-full rounded-lg border border-[#eee] px-4 py-3 mt-[10px]' onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="" className='mt-[10px]'>Sua senha</label>
                <input type="password" className='w-full rounded-lg border border-[#eee] px-4 py-3 mt-[10px]' onChange={(e) => setPassword(e.target.value)}/>
                <p className='mt-[5px] text-[#222] text-[0.9em] cursor-pointer' onClick={()=>{page(2)}}>Esqueci minha senha</p>
            </form>
            <button className='w-full h-[50px] bg-[#053B50] rounded-lg text-white font-semibold mt-[20px] mb-[20px] hover:bg-[#053B50cc] duration-300'>Entrar</button>
            <p className='text-center text-md mb-[15px]'>Ainda não possui conta? <span className='text-[#053B50] decoration-solid font-semibold underline cursor-pointer' onClick={handlePage}>Faça o cadastro!</span></p>
        </div>
    </>
  )
}
