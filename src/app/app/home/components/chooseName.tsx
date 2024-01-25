'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

export default function ChooseName() {
  const [errorMessage, setErrorMessage] = useState('')

  const schema = z.object({
      name: z.string()
      .nonempty('Coloque um nome')
      .min(3, 'Mínimo 3 caracteres')
      .max(14, 'Máximo 14 caracteres')
      .refine((name) =>{
        const defaultChar = /^[A-z]+$/;
        return defaultChar.test(name)
      }, 'Nome com caracteres inválido')

  })

  const {register,
       handleSubmit, 
       formState: {errors}} = useForm<FormData>({
      resolver: zodResolver(schema)
  })

  // Após validar o schema
  async function handleValidationForm(data: FormData){
      setErrorMessage(JSON.stringify(data, null, 2))
  }

  type FormData = z.infer<typeof schema> 

  return (
    <div className='w-screen sm:w-[90%] md:w-[867px] h-auto sm:h-[450px] bg-[#fff] rounded-lg shadow-2xl overflow-hidden flex relative'>
        <div className='w-full md:w-[60%] h-full bg-white p-12 flex justify-start'>
            <div className='w-full md:w-[80%] h-full'>
              <h2 className='font-bold text-[14px] sm:text-[16px]'>Vamos começar com o pé direito!</h2>
              <p className='font-normal text-[14px] sm:text-[16px] max-w-[420px] mt-[10px]'>Você está dando um ótimo passo em sua vida financeira, para começar como quer ser chamado?</p>
              <div className='w-full h-[1px] bg-[#bbbbbb66] mt-[40px] mb-[30px]'></div>
              <form action="" onSubmit={handleSubmit(handleValidationForm)} className='flex flex-col'>
                <label htmlFor="" className='font-medium mt-[10px] mb-[10px] text-[14px] sm:text-[16px] text-[#333]'>Como quer ser chamado?</label>
                <input type="text" className='rounded-lg border border-[#999] px-4 py-2 mb-[10px]' {...register('name')}/>
                {errors.name && <p className='mt-[-10px] text-[#FF6347] text-[14px] sm:text-[16px]'> {errors.name?.message} </p>}
                <button
                  type='submit'
                  className='w-full md:w-[100%] h-[45px] sm:h-[50px] rounded-lg mt-[15px] font-semibold bg-primary text-white text-[14px] sm:text-[16px]'
                >
                  Continuar
                </button>
          </form>
            </div>
        </div>
        <div className='w-[40%] h-full bg-gradient-to-r from-[#053B5011] to-[#053B50] overflow-y-hidden hidden md:block'>
          <Image
          src={'/chooseName.svg'}
          width={100}
          height={100}
          alt='DinDim'
          className='h-[400px] w-auto absolute top-[52px] right-[0px]'
          />
        </div>
    </div>
  )
}
