import type { Metadata } from 'next'
import Navbar from './components/navbarApp'

export const metadata: Metadata = {
  title: 'Din Dim - App',
  description: 'Controle suas finanças de forma fácil e eficiente com DinDim. Acompanhe seus gastos, defina orçamentos e metas, e invista seu dinheiro de forma inteligente.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}
