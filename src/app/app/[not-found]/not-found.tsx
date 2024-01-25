import Link from "next/link"

export default function HomeNotFound() {
    return (
      <>
        <main className='w-screen min-h-mainApp flex justify-center bg-[#eee]'>
          <div className="w-auto min-h-full flex flex-col justify-center bg-transparent items-center py-8">
              Não foi localizado essa página {`:(`}&nbsp; 
              <Link href={'/app/home'}><span className="text-primary underline font-bold"> 
              Clique aqui para ir a Home
              </span></Link>
          </div>
        </main>
      </>
    )
  }
  