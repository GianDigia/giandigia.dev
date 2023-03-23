import { FC } from 'react'
import styles from '@/components/layout/footer.module.scss'
import { projectData } from '@/data'

const { links, credits } = projectData.footer

const mappedLinks = links.map((link) => (
  <a key={link.name} className={styles.footerIconLink} href={link.url}>
    <link.iconComponent size={25} />
  </a>
))

const { url, text } = credits

export const Footer: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.iconsLine}>
      <div className={styles.divider} />
      {mappedLinks}
      <div className={styles.divider} />
    </div>
    <a href={url} className={styles.repoLink} target="_blank">
      {text}
    </a>
  </div>
)
