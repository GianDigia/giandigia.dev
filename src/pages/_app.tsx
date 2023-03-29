import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultLayout, NextPageWithLayout } from '@/pages/_layout'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? DefaultLayout

  return getLayout(<Component {...pageProps} />)
}

export default App
