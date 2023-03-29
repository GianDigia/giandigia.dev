import { FC } from 'react'
import styles from '@/components/text/magic_text.module.scss'

interface Props {
  text: string
}

export const MagicText: FC<Props> = ({ text }) => (
  <div className={styles.magicWrapper}>
    <div className={styles.magic}>{text}</div>
  </div>
)
