import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Din Dim',
  description: 'Controle suas finanças de forma fácil e eficiente com DinDim. Acompanhe seus gastos, defina orçamentos e metas, e invista seu dinheiro de forma inteligente.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
