import Image from 'next/image'
import TypeGraphic from './typeGraphic'

export default function Main() {
  return (
    <main className='w-screen h-mainApp flex justify-center bg-[#eee]'>
      <div className="w-[1200px] h-full flex justify-center items-start py-8">
        <TypeGraphic/>
      </div>
    </main>
  )
}
