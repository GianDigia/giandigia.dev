import { FC } from 'react'
import styles from '@/components/resume/experiences/title.module.scss'
import { ExperienceType } from '@/data/types/experiences'

type Props = Pick<ExperienceType, 'title'>

export const Title: FC<Props> = ({ title }) => {
  return <div className={styles.wrapper}>{title}</div>
}
