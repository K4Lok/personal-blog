import '../styles/globals.css'
import { NextIntlProvider } from 'next-intl'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
      <Analytics />
    </NextIntlProvider>
  )
}
