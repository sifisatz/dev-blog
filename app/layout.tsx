import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Joseph's Blog`,
  description: `Generated by Joseph's Blog`,
}

const header = (
  <header>
    <div >
      <h1 className="text-3xl font-bold"> {`Joseph's Blog`}</h1>
      <p className="text-xl font-light">
      🤟 Welcome to my tech blog. 💻 </p>
      <br />
    </div>
  </header>
)
const footer = (
  <footer className="bg-gray-900 text-gray-100 p-4">
    Developed by Joseph</footer>
)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
      <br />

          {footer}
        </div>
      </body>
    </html>
  )
}
