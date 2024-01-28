import localFont from 'next/font/local'

export default function RecoveryPasswordComponent({ page }: any) {
  return (
    <div className='w-[495px] h-auto bg-[#fff] mt-[20px] rounded-lg px-8'>
      <h2 className='text-center text-3xl font-semibold text-[#444] mt-[40px] mb-[20px]'>
        Recuperar senha
        </h2>
      <form action="" className='flex flex-col w-full h-auto '>
          <label htmlFor="" className='mt-[10px]'>
            Seu e-mail
          </label>
          <input type="text" className='w-full rounded-lg border border-[#eee] px-4 py-3 mt-[10px]'/>
      </form>
      <button className='w-full h-[50px] bg-primary rounded-lg text-white font-semibold 
      mt-[20px] mb-[20px] hover:bg-primaryOpacity duration-300'>
        Enviar código
        </button>
      <p className='mt-[5px] text-[#222] text-[0.9em] cursor-pointer text-center' 
      onClick={()=>{page(0)}}>
        Fazer Login
      </p>
    </div>
  )
}
