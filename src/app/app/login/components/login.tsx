'use client'

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";

export default function LoginComponent({ page }: any) {
    const [facebookHover, setFacebookHover] = useState(false)
    const [googleHover, setGoogleHover] = useState(false)  
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter();

    const schema = z.object({
        email: z.string()
        .min(1, 'Coloque seu e-mail')
        .toLowerCase()
        .email('E-mail inválido'),

        password: z.string().nonempty('Coloque sua senha')
        .min(5, 'Senha Inválida')
        .max(20, 'Senha Inválida'),
    })

    const {register,
        handleSubmit, 
        formState: {errors}} = useForm<FormData>({
       resolver: zodResolver(schema)
   })

   // Após validar o schema
   function handleValidationForm(data: FormData){
       setErrorMessage(JSON.stringify(data, null, 2))
       router.push('/app/home')
   }

   // Tipando o FormData inferindo o schema 
   type FormData = z.infer<typeof schema>

  return (
    <>
        <div className='w-[100%] h-auto'>
            <h2 className='text-center font-semibold text-2xl mt-[30px] text-[#333]'>Acesse sua conta</h2>
            <div className={`${facebookHover ? 'bg-[#3b5998] border-[#3b599890]' : 'bg-[#fff] border-[#eee]'} 
            w-full border rounded-lg px-4 py-3 flex items-center cursor-pointer mt-[25px] duration-300`}
             onMouseEnter={() =>{setFacebookHover(true)}} 
             onMouseLeave={() =>{setFacebookHover(false)}}>
                <FaFacebookF className={`${facebookHover ? 'invisible' : 'visible'} text-[#3b5998] text-2xl `}/>
                <div className='w-full'>
                    <p className={`${facebookHover ? 'text-[#fff]' : 'text-[#000]'} text-center font-semibold`}>
                        Entre com o Facebook
                    </p>
                </div>
            </div>

            <div className={`${googleHover ? 'bg-[#EA4435] border-[#EA443590]' : 'bg-[#fff] border-[#eee]'} 
            w-full border rounded-lg px-4 py-3 flex items-center cursor-pointer justify-center mt-[15px]`} 
            onMouseEnter={() =>{setGoogleHover(true)}} 
            onMouseLeave={() =>{setGoogleHover(false)}}>
                <FcGoogle className={`${googleHover ? 'invisible' : 'visible'} text-2xl `}/>
                <div className='w-full'>
                    <p className={`${googleHover ? 'text-[#fff]' : 'text-[#000]'} text-center font-semibold`}>
                        Entre com o Google
                    </p>
                </div>
            </div>

            <div className='relative w-full mt-[25px] flex justify-center'>
                <p className='bg-[#fff] text-center relative z-30 w-[35px] text-[#444]'>ou</p>
                <div className='w-full h-[1px] bg-[#bbb] absolute bottom-[10px] z-20'></div>
            </div>
            <form action="" onSubmit={handleSubmit(handleValidationForm)} className='flex flex-col w-full h-auto '>
                <label htmlFor="" className='mt-[10px]'>Seu e-mail</label>
                <input type="text" 
                className={`${errors.email ? ' border-[#FF6347]' : ' border-[#eee]'} 
                w-full rounded-lg border px-4 py-3 mt-[10px]`}
                 {...register('email')}/>
                
                {errors.email && <p className="mt-[10px] text-[#FF6347]">{errors.email?.message}</p>}

                <label htmlFor="" className='mt-[10px]'>Sua senha</label>
                <input type="password" 
                className={`${errors.password ? ' border-[#FF6347]' : 'border-[#eee]'} 
                w-full rounded-lg border px-4 py-3 mt-[10px]`}
                {...register('password')}/>

                {errors.password && <p className="mt-[10px] text-[#FF6347]">{errors.password?.message}</p>}

                <p className='mt-[5px] text-[#222] text-[0.9em] cursor-pointer w-[162px]' 
                onClick={()=>{page(2)}}>
                    Esqueci minha senha
                </p>
                <button 
                className='w-full h-[50px] bg-[#053B50] rounded-lg text-white 
                font-semibold mt-[20px] mb-[20px] hover:bg-[#053B50cc] duration-300' 
                type="submit">
                    Entrar
                </button>
            </form>
            <p className='text-center text-md mb-[15px]'>
                Ainda não possui conta?&nbsp;
                <span className='text-[#053B50] decoration-solid font-semibold underline cursor-pointer' 
                onClick={()=>page(1)}>
                    Faça o cadastro!
                </span></p>
        </div>
    </>
  )
}
