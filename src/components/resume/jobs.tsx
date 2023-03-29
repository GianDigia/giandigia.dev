import { FC } from 'react'
import styles from '@/components/resume/jobs.module.scss'
import { ExperienceType } from '@/data/types/experiences'
import { Title } from '@/components/resume/experiences/title'
import { JobExperience } from '@/components/resume/experiences/job_experience'

export const Jobs: FC<ExperienceType> = ({ items, title }) => {
  const mappedItems = items
    .filter(({ isOnResume = true }) => isOnResume)
    .map((item) => <JobExperience key={item.organization} {...item} />)

  return (
    <div>
      <Title title={title} />
      <div className={styles.itemsWrapper}>{mappedItems}</div>
    </div>
  )
}
