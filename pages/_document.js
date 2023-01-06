import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/pwa/icon-192x192.png" />
        <meta name='theme-color' content="#FFFFFF"></meta>
      </Head>
      <body className='overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
