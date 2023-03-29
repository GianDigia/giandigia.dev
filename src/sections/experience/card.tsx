import { forwardRef } from 'react'
import styles from '@/sections/experience/card.module.scss'
import { useDatesRangeToString } from '@/utils/hooks/use_dates_range_to_string'
import { Badge } from '@/sections/experience/card/badge'
import { Technology } from '@/sections/experience/card/technology'
import { ItemType } from '@/data/types/experiences'

export const Card = forwardRef<HTMLDivElement, ItemType>(
  ({ dates, title, organization, description, technologies, badge }, ref) => {
    const datesString = useDatesRangeToString(dates)

    const mappedTechnologies = technologies?.map((technology) => (
      <Technology key={technology.name} {...technology} />
    ))

    return (
      <div ref={ref} className={styles.card}>
        <div className={styles.cardBorder} />
        <div className={styles.cardContent}>
          <div className={styles.spacer}>
            <div className={styles.title}>{title}</div>

            <div className={styles.organizationAndDates}>
              <div>{organization}</div>
              <div>{datesString}</div>
            </div>

            {description && <p className={styles.description}>{description}</p>}

            {mappedTechnologies && (
              <footer className={styles.technologiesWrapper}>
                {mappedTechnologies}
              </footer>
            )}

            {badge && <Badge {...badge} />}
          </div>
        </div>
      </div>
    )
  }
)

Card.displayName = 'Card'
