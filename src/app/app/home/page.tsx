import ComponentVerify from './components/componentVerify'

export default function Inicio() {
  return (
    <>
        <main className='w-screen min-h-mainApp flex justify-center bg-[#eee] dark:bg-[#222]'>
          <div className="w-auto min-h-full flex justify-center bg-transparent items-start py-8">
              {/* Componente para trocar os componentes na /app/home, Componentes:
              (Escolher Nome, Escolher Tipo de Grafico, Visão Geral) */}
              <ComponentVerify/>
          </div>
        </main>
    </>
  )
}
