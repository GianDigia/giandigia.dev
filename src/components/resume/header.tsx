import { FC } from 'react'
import styles from '@/components/resume/header.module.scss'
import { projectData } from '@/data'

const { subheader } = projectData

const mappedSubheaders = subheader.map((text) => <div key={text}>{text}</div>)

export const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>Gianmarco Digiacomo</div>

      <div className={styles.subtitle}>Frontend Software Engineer</div>

      <div className={styles.description}>{mappedSubheaders}</div>
    </div>
  )
}
