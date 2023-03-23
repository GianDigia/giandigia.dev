import React, { FC } from 'react'
import styles from '@/sections/subheader.module.scss'
import { projectData } from '@/data'

const { subheader } = projectData

export const Subheader: FC = () => (
  <div className={styles.wrapper}>{subheader}</div>
)
