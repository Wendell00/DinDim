'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function TypeGraphic() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedAnyOption, setSelectedAnyOption] = useState(false)

  interface Option {
    id: string;
    label: string;
    description: string;
  }

  const options: Option[] = [
    {
      id: 'btn1',
      label: 'Sair do Vermelho',
      description: 'Quero me organizar para quitar dívidas e viver mais tranquilo(a).',
    },
    {
      id: 'btn2',
      label: 'Pensar no futuro',
      description: 'Quero controlar gastos para que eu consiga guardar/investir meu dinheiro.',
    },
    {
      id: 'btn3',
      label: 'Evoluir a Gestão Financeira',
      description: 'Estou bem financeiramente e quero evoluir ainda mais.',
    },
  ];

  return (
    <div className='w-full md:w-[867px] h-full md:h-[639px] bg-[#fff] rounded-lg shadow-2xl overflow-hidden'>
      <div className='w-full h-[77px] bg-[#176B87] relative'>
        <Image
          src={'/logoTypeGraphic.png'}
          width={100}
          height={100}
          alt='DinDim'
          className='absolute right-[50%] left-[50%] h-[80px] w-auto translate-x-[-50%] bottom-[-35%]'
        />
      </div>
      <form className='w-full h-auto md:h-[562px] md:w-[100%] px-4 py-12 flex flex-col items-center'>
        <h2 className='text-center text-3xl text-[#2e312d] font-semibold mb-[5px]'>
          Quais são as suas metas com o Din Dim?
        </h2>
        <p className='text-center text-[16px] text-[#5c5f5a] font-medium'>
          Escolha apenas uma opção para continuar
        </p>
        <div className='w-full md:w-[640px] h-[290px] mt-[40px] flex flex-col justify-between'>
          {options.map((option) => (
            <div
              key={option.id}
              className={`${
                selectedOption === option.id
                  ? 'border-[#053B50] bg-[#053B5011]'
                  : 'border-[#eee] bg-[#fff]'
              } duration-300 border-[2px] rounded-lg w-full h-[29%] flex items-center flex-row cursor-pointer`}
              onClick={() => {
                setSelectedOption(option.id)
                setSelectedAnyOption(true)
              }}
            >
              <div className='w-[10%] container'>
                <input
                  type="checkbox"
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                />
                <div className="checkmark" />
              </div>
              <label className='w-[90%] h-full text-[13px] md:text-[16px] flex flex-col items-start justify-center cursor-pointer'>
                <h3 className='font-semibold'>{option.label}</h3>
                <p>{option.description}</p>
              </label>
            </div>
          ))}
        </div>
        <Link href="/app/dashboard" className='w-full md:w-[40%] h-[50px]'>
          <button
            disabled={!selectedAnyOption}
            className={`${
              selectedAnyOption
                ? 'text-[#fff] bg-[#053B50]'
                : 'bg-[#eee] text-[#999]'
            } w-full h-[100%] md:w-[100%] md:h-[50px] rounded-lg mt-[25px] font-semibold`}
          >
            Continuar
          </button>
        </Link>
      </form>
    </div>
  )
}
