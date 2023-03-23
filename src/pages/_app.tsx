import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import styles from '@/pages/app.module.scss'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Header />
    <div className={styles.sectionsContainer}>
      <Component {...pageProps} />
    </div>
    <Footer />
  </>
)

export default App
