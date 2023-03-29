import { createRef, FC } from 'react'
import styles from '@/sections/experience.module.scss'
import { Card } from '@/sections/experience/card'
import { useHoverEffect } from '@/sections/experience/use_experience_hover'
import { ExperienceType } from '@/data/types/experiences'

export const Experience: FC<ExperienceType> = ({ title, items }) => {
  const refs = items.map(() => createRef<HTMLDivElement>())

  useHoverEffect(refs)

  const mappedCards = items.map((item, index) => (
    <Card
      ref={refs[index]}
      key={`${item.title}-${item.dates?.from}`}
      {...item}
    />
  ))

  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <div className={styles.cardsWrapper}>{mappedCards}</div>
    </div>
  )
}
