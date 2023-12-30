'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function TypeGraphic() {
  const [btn1Check, setBtn1Check] = useState(false)
  const [btn2Check, setBtn2Check] = useState(false)
  const [btn3Check, setBtn3Check] = useState(false)

  const checkBtns = () =>{
    if(btn1Check || btn2Check || btn3Check){
      return true
    }else return false
  }
  
  const isAnyBtnChecked = checkBtns();

  return (
    <div className='w-[867px] h-[639px] bg-[#fff] rounded-lg shadow-2xl overflow-hidden'>
        <div className='w-full h-[77px] bg-[#176B87] relative'>
            <Image
                src={'/logoTypeGraphic.png'}
                width={100}
                height={100}
                alt='DinDim'
                className='absolute right-[50%] left-[50%] h-[80px] w-auto translate-x-[-50%] bottom-[-35%]'
            />
        </div>
        <form className='w-full h-[562px] px-4 py-12 flex flex-col items-center'>
              <h2 className='text-center text-3xl text-[#2e312d] font-semibold mb-[5px]'>Quais são as suas metas com o Din Dim?</h2>
              <p className='text-center text-[16px] text-[#5c5f5a] font-medium'>Escolha apenas uma opção para continuar</p>
              <div className='w-[640px] h-[290px] mt-[40px] flex flex-col justify-between'>
                  <div className={`${btn1Check ? 'border-[#053B50] bg-[#053B5011]' : 'border-[#eee] bg-[#fff]'} duration-300 border-[2px] rounded-lg w-full h-[29%] flex items-center flex-row cursor-pointer`} 
                  onClick={() =>{ 
                  setBtn1Check(!btn1Check)
                  setBtn2Check(false)
                  setBtn3Check(false)
                  }}>
                    <div className='w-[10%] container'>
                      <input type="checkbox" checked={btn1Check} onChange={() => setBtn1Check(!btn1Check)} />
                      <div className="checkmark"></div>
                    </div>
                    <label className='w-[90%] h-full text-[16px] flex flex-col items-start justify-center cursor-pointer'>
                      <h3 className='font-semibold'>Sair do Vermelho</h3>
                      <p>Quero me organizar para quitar dívidas e viver mais tranquilo(a).</p>
                    </label>
                  </div>
                  <div className={`${btn2Check ? 'border-[#053B50] bg-[#053B5011]' : 'border-[#eee] bg-[#fff]'} duration-300 border-[2px] rounded-lg w-full h-[29%] flex items-center flex-row cursor-pointer`}
                    onClick={() =>{ 
                      setBtn1Check(false)
                      setBtn2Check(!btn2Check)
                      setBtn3Check(false)
                    }}>
                    <div className='w-[10%] container'>
                      <input type="checkbox" checked={btn2Check} onChange={() => setBtn2Check(!btn2Check)}/>
                      <div className="checkmark"></div>
                    </div>
                    <label className='w-[90%] h-full text-[16px] flex flex-col items-start justify-center cursor-pointer'>
                      <h3 className='font-semibold'>Pensar no futuro</h3>
                      <p>Quero controlar gastos para que eu consiga guardar/investir meu dinheiro.</p>
                    </label>
                  </div>
                  <div className={`${btn3Check ? 'border-[#053B50] bg-[#053B5011]' : 'border-[#eee] bg-[#fff]'} duration-300 border-[2px] rounded-lg w-full h-[29%] flex items-center flex-row cursor-pointer`}
                    onClick={() =>{ 
                      setBtn1Check(false)
                      setBtn2Check(false)
                      setBtn3Check(!btn3Check)
                    }}>
                    <div className='w-[10%] container'>
                      <input type="checkbox" checked={btn3Check} onChange={() => setBtn3Check(!btn3Check)}/>
                      <div className="checkmark"></div>
                    </div>
                    <label className='w-[90%] h-full text-[16px] flex flex-col items-start justify-center cursor-pointer'>
                      <h3 className='font-semibold'>Evoluir a Gestão Financeira</h3>
                      <p>Estou bem financeiramente e quero evoluir ainda mais.</p>
                    </label>
                  </div>
              </div>
              <button disabled={!isAnyBtnChecked} className={`${isAnyBtnChecked ? 'text-[#fff] bg-[#053B50]' : 'bg-[#eee] text-[#999]'} w-[40%] h-[50px] rounded-lg mt-[25px] font-semibold`}>Salvar</button>
        </form>
    </div>
  )
}
