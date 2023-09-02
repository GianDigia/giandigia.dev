import { FC } from 'react'
import styles from '@/components/layout/header.module.scss'
import Image from 'next/image'
import { MagicText } from '@/components/text/magic_text'
import { projectData } from '@/data'

const { sentenceStart, magicText } = projectData.header

export const Header: FC = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarWrapper}>
        <Image
          className={styles.avatar}
          priority
          src={'/avatar.png'}
          alt={'avatar'}
          // TODO: Already handled in the CSS module but next/image seems to need these props
          width={100}
          height={100}
        />
      </div>

      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          {sentenceStart}
          <MagicText text={magicText} />
        </div>
      </div>
    </div>
  )
}
