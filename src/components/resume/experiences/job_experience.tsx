import { FC } from 'react'
import styles from '@/components/resume/experiences/job_experience.module.scss'
import { ItemType } from '@/data/types/experiences'
import { useDatesRangeToString } from '@/utils/hooks/use_dates_range_to_string'

export const JobExperience: FC<ItemType> = ({
  organization,
  dates,
  technologies,
  title,
  description,
}) => {
  const dateRange = useDatesRangeToString(dates)

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {title}
        <div className={styles.at}>@</div>
        {organization}
      </div>

      <div className={styles.header}>
        <div className={styles.dateRange}>{dateRange}</div>
        <div className={styles.technologiesWrapper}>
          {technologies?.map(({ name, iconComponent: Icon }) => (
            <div key={name} className={styles.technology}>
              <Icon />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
