import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Gamin' Nation",
  description: 'A page to get info on all the most popular games',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-zinc-900"}>{children}</body>
    </html>
  )
}
