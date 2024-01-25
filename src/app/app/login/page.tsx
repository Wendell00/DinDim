'use client'

import localFont from 'next/font/local'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginComponent from './components/login';
import SignUpComponent from './components/cadastro';
import RecoveryPasswordComponent from './components/recoveryPassword';

const myFont = localFont({ src: '../../fonts/semdisplay.woff' })

export default function Login() {
    // estado para a troca de componentes de login/cadastro/esqueci a senha
    const [page, setPage] = useState(0) // 0: Login 1: Cadastro 2: Esqueci a senha

    // Notificação de Registro
    const notify = () => {
        toast.success("Registrado com sucesso !", {
          position: toast.POSITION.TOP_RIGHT
        });
    };
    
  return (
    <>
    <div className='w-screen h-auto flex overflow-y-hidden'>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" 
        />
        <div className={`${page == 1 ? 'order-2' : ''} w-full md:w-[45%] h-auto bg-[#ddd] flex flex-col items-center justify-center relative z-30`}>
            <div className='w-[100%] h-[60px] bg-[#053B50] flex justify-center items-center md:hidden'>
                <h1 className={`${myFont.className} text-[2em] text-white mr-[10px]`}> 
                    <span className='text-[#64ccc5]'>
                        Din</span> Dim
                </h1>
                <Image
                src={'/logoIcon.png'}
                width={100}
                height={100}
                alt='Din Dim'
                className='h-[50px] w-auto mt-[-5px]'
                />
            </div>
            <div className='w-[100%] h-auto bg-[#fff] flex items-center justify-center px-8 md:px-16 md:h-[100%]'>
                {page === 2 ? <RecoveryPasswordComponent page={setPage}/> :
                    page === 1 ? <SignUpComponent page={setPage} notifyRegister={notify}/> :
                        <LoginComponent page={setPage}/>}
            </div>
        </div>
        <div className='w-[55%] h-screen bg-[#053B50] hidden md:flex justify-center items-center lg:relative'>
            <Image
            src={page === 0 ? '/loginImage.jpg' :
            page === 1 ? '/signUpImage.jpg' :
            '/forgetPasswordImage.jpg'}
            width={900}
            height={900}
            alt='Din Dim'
            className='h-full min-w-full w-auto opacity-[6%] absolute z-10'
            />

            <div className='w-full h-full flex flex-col justify-center items-center cursor-pointer z-20'>
                <div className='w-full h-[100px] flex items-center justify-center'>
                    <h1 className={`${myFont.className} text-[4em] text-white mr-[10px]`}> 
                    <span className='text-[#64ccc5]'>
                        Din</span> Dim
                    </h1>
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
    </div>
    </>
  )
}