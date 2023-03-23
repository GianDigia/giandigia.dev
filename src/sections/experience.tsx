import { createRef, FC } from 'react'
import styles from '@/sections/experience.module.scss'
import { Card } from '@/sections/experience/card'
import { useHoverEffect } from '@/sections/experience/use_experience_hover'
import { ExperienceType } from '@/data/types/experiences'

type Props = {
  experience: ExperienceType
}

export const Experience: FC<Props> = ({ experience }) => {
  const refs = experience.items.map(() => createRef<HTMLDivElement>())

  useHoverEffect(refs)

  const { title, items } = experience

  const mappedCards = items
    .filter((item) => !item.hidden)
    .map((item, index) => (
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
