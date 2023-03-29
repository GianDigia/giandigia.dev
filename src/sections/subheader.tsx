import { FC } from 'react'
import styles from '@/sections/subheader.module.scss'
import { projectData } from '@/data'

const { subheader } = projectData

const mappedSubheaders = subheader.map((text) => <div key={text}>{text}</div>)

export const Subheader: FC = () => (
  <div className={styles.wrapper}>{mappedSubheaders}</div>
)
