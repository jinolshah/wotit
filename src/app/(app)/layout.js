import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} id='app'>
        <main className='flex min-h-screen'>
          <aside className='bg-red-100 max-w-md bg-verdigris-800 p-4'>
            <nav className='flex flex-col text-center mt-12 gap-4'>
              <Link href={'/account'}>Settings</Link>
              <Link href={'/analytics'}>Analytics</Link>
              <button>
                Logout
                {/* Fix logout */}
              </button>
            </nav>
          </aside>
          <div className="p-6 sm:max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}