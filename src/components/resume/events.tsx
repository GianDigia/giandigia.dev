import { FC } from 'react'
import styles from '@/components/resume/common.module.scss'
import { ExperienceType } from '@/data/types/experiences'
import { Title } from '@/components/resume/experiences/title'
import { BadgeExperience } from '@/components/resume/experiences/badge_experience'

export const Events: FC<ExperienceType> = ({ items, title }) => {
  const mappedItems = items
    .filter(({ isOnResume = true }) => isOnResume)
    .map((item) => <BadgeExperience key={item.organization} {...item} />)

  return (
    <div>
      <Title title={title} />
      <div className={styles.itemsWrapper}>{mappedItems}</div>
    </div>
  )
}
