import { FormContextProvider } from '@/app/contexts/infoContext'
import ComponentVerify from './components/componentVerify'


export default function Inicio() {
  return (
    <>
      <FormContextProvider>
        <main className='w-screen min-h-mainApp flex justify-center bg-[#eee] dark:bg-[#222]'>
          <div className="w-auto min-h-full flex justify-center bg-transparent items-start py-8">
              <ComponentVerify/>
          </div>
        </main>
      </FormContextProvider>
    </>
  )
}
