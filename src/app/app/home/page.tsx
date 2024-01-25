import Image from 'next/image'
import Navbar from './components/navbarApp'
import ChooseName from './components/chooseName'
import TypeGraphic from './components/typeGraphic'
import GeneralInfo from './components/generalInfo'

export default function Inicio() {
  return (
    <>
      <main className='w-screen min-h-mainApp flex justify-center bg-[#eee]'>
        <div className="w-auto min-h-full flex justify-center bg-transparent items-start py-8">
            {/* <TypeGraphic/> */}
            {/* <ChooseName/>*/}
            <GeneralInfo/>
        </div>
      </main>
    </>
  )
}
