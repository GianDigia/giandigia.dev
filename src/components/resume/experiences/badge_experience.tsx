import { FC } from 'react'
import styles from '@/components/resume/experiences/badge_experience.module.scss'
import { ItemType } from '@/data/types/experiences'

export const BadgeExperience: FC<ItemType> = ({ organization, title }) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>{title}</div>
    {organization && (
      <>
        <div className={styles.divider}></div>
        <div>{organization}</div>
      </>
    )}
  </div>
)
