'use client'

import localFont from 'next/font/local'
import Image from 'next/image'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useState } from 'react';
import Link from 'next/link'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginComponent from './components/login';
import SignUpComponent from './components/cadastro';

const myFont = localFont({ src: '../../fonts/semdisplay.woff' })

export default function Login() {
    const [page, setPage] = useState(0) // estado para a troca de componentes de login/cadastro/esqueci a senha

    const notify = () => {
        toast.success("Registrado com sucesso !", {
          position: toast.POSITION.TOP_RIGHT
        });
        };
    
  return (
    <>
    <div className='w-screen h-screen flex overflow-y-hidden'>
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
        <div className={`${page == 1 ? 'order-2' : ''} w-[45%] h-screen bg-[#ddd] flex flex-col items-center justify-center`}>
            <div className='w-[100%] h-[100%] bg-[#fff] flex items-center justify-center px-16'>
                {/* {page == 2 && <LoginComponent page={setPage}/>} */}
                {page == 1 && <SignUpComponent page={setPage}/>}
                {page == 0 && <LoginComponent page={setPage}/>}
            </div>
        </div>
        <div className='w-[55%] h-screen bg-[#053B50] flex justify-center items-center relative'>
            <Image
            src={`${page == 0 && '/loginImage.jpg' || page == 1 && '/signUpImage.jpg' || page == 2 && '/forgetPasswordImage.jpg'}`}
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
    </div>
    </>
  )
}
