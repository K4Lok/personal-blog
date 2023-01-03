import Head from 'next/head'
import { Inter } from '@next/font/google'

import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>KaLok's Blog</title>
        <meta name="description" content="Personal Blog Page by KaLok" />
        <meta name="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className='max-w-container mx-auto'>
        <Introduction />
        <div className="h-screen flex justify-center items-center">
          2
        </div>
      </main>
    </>
  )
}
