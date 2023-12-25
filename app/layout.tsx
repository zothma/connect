import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import { dm_sans } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Connect',
  description: 'Application de mise en relation entre étudiants et professionnels',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={dm_sans.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
