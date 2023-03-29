import { FC } from 'react'
import styles from '@/sections/experience/card/badge.module.scss'
import { BadgeType } from '@/data/types/experiences'

export const Badge: FC<BadgeType> = ({ iconComponent: Icon, link }) => (
  <a className={styles.wrapper} target="_blank" href={link}>
    <Icon size={20} />
  </a>
)
