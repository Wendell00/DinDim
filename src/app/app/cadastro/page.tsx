'use client'

import localFont from 'next/font/local'
import Image from 'next/image'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { use, useState } from 'react';
import Link from 'next/link'
import validationForm from './utils/validationForm';

const myFont = localFont({ src: '../../fonts/semdisplay.woff' })

export default function Cadastro() {
    const [facebookHover, setFacebookHover] = useState(false)
    const [googleHover, setGoogleHover] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [formError, setFormError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleValidation = async () => {
        if(!(password == passwordRepeat || password == '')){
            if(password == ''){
                setFormError(true)
                setErrorMessage('Senha obrigatória')
            }
            setFormError(true)
            setErrorMessage('Senhas não conferem')
            return false
        }else {
            setFormError(false)
        }

        if(email == ''){
            setFormError(true)
            setErrorMessage('E-mail obrigatório')
            return false
        }

        const validation = validationForm(email, password)

        if(!validation){
            const data = {
                "email": email,
                "password": password
            }

            const response = await fetch('/api/user', {
                method: "POST",
                body: JSON.stringify(data),
            });
        }else {
            setFormError(true)
            setErrorMessage(validation)
        }
    }

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
            <h2 className='text-center font-semibold text-2xl mt-[30px] text-[#333]'>Crie sua conta</h2>
            <div className={`${facebookHover ? 'bg-[#3b5998] border-[#3b599890]' : 'bg-[#fff] border-[#eee]'} w-full border rounded-lg px-4 py-3 flex items-center cursor-pointer mt-[25px] duration-300`} onMouseEnter={() =>{setFacebookHover(true)}} onMouseLeave={() =>{setFacebookHover(false)}}><FaFacebookF className={`${facebookHover ? 'invisible' : 'visible'} text-[#3b5998] text-2xl `}/><div className='w-full'><p className={`${facebookHover ? 'text-[#fff]' : 'text-[#000]'} text-center font-semibold`}>Registre-se com o Facebook</p></div></div>
            <div className={`${googleHover ? 'bg-[#EA4435] border-[#EA443590]' : 'bg-[#fff] border-[#eee]'} w-full border rounded-lg px-4 py-3 flex items-center cursor-pointer justify-center mt-[15px]`} onMouseEnter={() =>{setGoogleHover(true)}} onMouseLeave={() =>{setGoogleHover(false)}}><FcGoogle className={`${googleHover ? 'invisible' : 'visible'} text-2xl `}/><div className='w-full'><p className={`${googleHover ? 'text-[#fff]' : 'text-[#000]'} text-center font-semibold`}>Registre-se com o Google</p></div></div>
            <div className='relative w-full mt-[25px] flex justify-center'>
                <p className='bg-[#fff] text-center relative z-30 w-[35px] text-[#444]'>ou</p>
                <div className='w-full h-[1px] bg-[#bbb] absolute bottom-[10px] z-20'></div>
            </div>
            <form action="" className='flex flex-col w-full h-auto '>
                <label htmlFor="" className='mt-[10px]'>Seu e-mail</label>
                <input type="text" className={`${formError && errorMessage[0] == 'E' ? 'border-[#FF6347]' : 'border-[#eee]'} w-full rounded-lg border px-4 py-3 mt-[10px]`} onChange={(e) => setEmail(e.target.value)}/>
                <p className={`${formError && errorMessage[0] == 'E' ? 'block': 'hidden'} mt-[10px] text-[#FF6347]`}>
                    {errorMessage}
                </p>
                <div className='flex flex-row w-full h-auto'>
                    <div className='flex flex-col w-[50%] h-auto mr-[5%] relative'>
                        <label htmlFor="" className='mt-[10px]'>Sua senha</label>
                        <input type="password" className={`${formError && errorMessage[0] == 'S' ? 'border-[#FF6347] mb-[20px]' : 'border-[#eee] mb-[0px]'} w-[100%] rounded-lg border px-4 py-3 mt-[10px]`} onChange={(e) => setPassword(e.target.value)}/>
                        <p className={`${formError && errorMessage[0] == 'S' ? 'block': 'hidden'} absolute bottom-[-10px] text-[#FF6347]`}>
                            {errorMessage}
                        </p>
                    </div>
                    <div className='flex flex-col w-[50%] h-auto'>
                        <label htmlFor="" className='mt-[10px]'>Repetir Senha</label>
                        <input type="password" 
                        className={`${formError && errorMessage[0] == 'S' ? 'border-[#FF6347]' : 'border-[#eee]'} w-[100%] rounded-lg border px-4 py-3 mt-[10px]`}
                        onChange={(e) => setPasswordRepeat(e.target.value)}/>
                    </div>
                </div>
            
            </form>
            <button className='w-full h-[50px] bg-[#053B50] rounded-lg text-white font-semibold mt-[20px] mb-[20px] hover:bg-[#053B50cc] duration-300' onClick={handleValidation}>Começar a usar</button>
            <p className='text-center text-md mb-[15px]'>Já sou cadastrado. <Link href="/app/login"><span className='text-[#053B50] decoration-solid font-semibold underline cursor-pointer'>Quero fazer login!</span></Link></p>
        </div>
    </div>
    </>
  )
}
