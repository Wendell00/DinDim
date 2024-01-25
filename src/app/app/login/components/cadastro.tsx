'use client'

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

export default function SignUpComponent({ page, notifyRegister }: any) {
    const [facebookHover, setFacebookHover] = useState(false)
    const [googleHover, setGoogleHover] = useState(false)
    const [emailDB, setEmailDB] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')

    const schema = z.object({
        email: z.string()
        .min(1, 'Campo obrigatório')
        .toLowerCase()
        .email('E-mail inválido'),

        password: z.string().nonempty('Campo obrigatório')
        .min(5, 'Senha muito curta')
        .max(20, 'Senha muito grande'),

        passwordConfirm: z.string()
        .nonempty('Confirma a senha')
        .min(5, 'Senha muito curta')
        .max(20, 'Senha muito grande'),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: "As senhas precisam ser iguais",
        path: ["confirm"], // path
    })

    const {register,
         handleSubmit, 
         formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    // Após validar o schema
    async function handleValidationForm(data: FormData){
        setErrorMessage(JSON.stringify(data, null, 2))
        if(await emailVerification(data.email)){
            handleValidation(data.email, data.password)
        }
    }

    // Tipando o FormData e adicionando o tipo do Confirm para verificar se as senhas estão iguais 
    interface FormData extends z.infer<typeof schema> {
        confirm: {
          // Definindo as propriedades esperadas para o objeto confirm
          password: string;
          passwordConfirm: string;
        }
      }

    const handleValidation = async (email: string, password: string) => {
        const data = {
            "email": email,
            "password": password
        }

        const response = await fetch('/api/user', {
            method: "POST",
            body: JSON.stringify(data),
        });
        
        notifyRegister()
        page(0)
    }

    const emailVerification = async (email: string) => {
        const response = await fetch(`/api/user/&email=${email}`, {
            method: "GET",
        });

        const user = await response.json();
        const text = user.error.text
        
        if(text == "E-mail já cadastrado"){
            setEmailDB(true)
            return false
        }else {
            setEmailDB(false)
            return true
        }
    }

    const handlePage = () => {
        page(0);
    };

  return (
    <>
        <div className='w-[100%] h-auto'>
            <h2 className='text-center font-semibold text-2xl mt-[30px] text-[#333]'>Crie sua conta</h2>

            <div className={`${facebookHover ? 'bg-[#3b5998] border-[#3b599890]' : 'bg-[#fff] border-[#eee]'}
             w-full border rounded-lg px-4 py-3 flex items-center cursor-pointer mt-[25px] duration-300`} 
             onMouseEnter={() =>{setFacebookHover(true)}} 
             onMouseLeave={() =>{setFacebookHover(false)}}>
                <FaFacebookF className={`${facebookHover ? 'invisible' : 'visible'} text-[#3b5998] text-2xl `}/>
                <div className='w-full'>
                    <p className={`${facebookHover ? 'text-[#fff]' : 'text-[#000]'} text-center font-semibold`}>
                    Registre-se com o Facebook
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
                        Registre-se com o Google
                        </p>
                </div>
            </div>

            <div className='relative w-full mt-[25px] flex justify-center'>
                <p className='bg-[#fff] text-center relative z-30 w-[35px] text-[#444]'>ou</p>
                <div className='w-full h-[1px] bg-[#bbb] absolute bottom-[10px] z-20'></div>
            </div>
            <form  onSubmit={handleSubmit(handleValidationForm)} action="" className='flex flex-col w-full h-auto'>
                <label htmlFor="" className='mt-[10px]'>Seu e-mail</label>
                <input 
                type="text" 
                className={`${errors.email || emailDB ? 'border-[#FF6347]' : 'border-[#eee]'} 
                w-full rounded-lg border px-4 py-3 mt-[10px]`} 
                {...register('email')}/>

                {(errors.email || emailDB) && 
                <p className='mt-[10px] text-[#FF6347]'>
                    {errors.email?.message || emailDB ? 'E-mail já cadastrado' : '' }
                </p>}

                <div className='flex flex-row w-full h-auto'>
                    <div className='flex flex-col w-[50%] h-auto mr-[5%] relative'>
                        <label htmlFor="" className='mt-[10px]'>Sua senha</label>
                        <input 
                        type="password" 
                        className={`${errors.password || errors.passwordConfirm || errors.confirm?.message ? 
                            'border-[#FF6347] mb-[20px]' : 'border-[#eee] mb-[0px]'} 
                        w-[100%] rounded-lg border px-4 py-3 mt-[10px]`} 
                        {...register('password')}
                        />

                        {(errors.password || errors.passwordConfirm || errors.confirm?.message) && (
                        <p className='mt-[-10px] text-[#FF6347]'>
                            {errors.password?.message || errors.passwordConfirm?.message || errors.confirm?.message}
                        </p>
                        )}
                        
                    </div>
                    <div className='flex flex-col w-[50%] h-auto'>
                        <label htmlFor="" className='mt-[10px]'>Confirmar a Senha</label>
                        <input 
                        type="password" 
                        className={`${errors.password || errors.passwordConfirm || errors.confirm?.message ? 
                            'border-[#FF6347]' : 'border-[#eee]'} 
                        w-[100%] rounded-lg border px-4 py-3 mt-[10px]`}
                        {...register('passwordConfirm')}
                        />
                    </div>
                </div>

                <button className='w-full h-[50px] bg-primary rounded-lg text-white font-semibold mt-[30px] 
                mb-[20px] hover:bg-primaryOpacity duration-300' 
                type='submit'>
                    Começar a usar
                </button>
            </form>
            <p className='text-center text-md mb-[15px]'>
                Já sou cadastrado. 
                <span className='text-primary decoration-solid font-semibold underline cursor-pointer' 
                    onClick={handlePage}>
                        Quero fazer login!
                </span>
            </p>
        </div>
    </>
  )
}


