import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import styles from '@/pages/layout.module.scss'

type GetLayoutCallback = (page: ReactElement) => ReactNode

export const DefaultLayout: GetLayoutCallback = (page) => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.sectionsContainer}>{page}</div>
    <Footer />
  </div>
)

export type NextPageWithLayout = NextPage & {
  getLayout?: GetLayoutCallback
}
