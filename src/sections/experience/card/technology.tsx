import React, { FC } from 'react'
import styles from '@/sections/experience/card/technology.module.scss'
import { Tooltip } from '@/components/tooltip'
import { TechnologyType } from '@/data/types/experiences'

export const Technology: FC<TechnologyType> = ({
  iconComponent: Icon,
  name,
}) => (
  <Tooltip message={name} className={styles.wrapper}>
    <Icon size={30} />
  </Tooltip>
)
