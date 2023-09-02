import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { Header } from '@/components/layout/header'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
)

export default App
