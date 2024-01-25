import Link from "next/link"

export default function NotFound() {
    return (
      <>
        <main className='w-screen h-screen flex justify-center bg-[#eee]'>
          <div className="w-auto min-h-full flex flex-col justify-center bg-transparent items-center py-8">
              Não foi localizado essa página {`:(`}&nbsp; 
              <Link href={'/'}><span className="text-primary underline font-bold"> 
              Clique aqui para ir ao site
              </span></Link>
          </div>
        </main>
      </>
    )
  }
  