import { FC } from 'react'
import styles from '@/components/resume/footer.module.scss'
import { projectData } from '@/data'
import { webSiteLink } from '@/data/links'

const cvLinks = [webSiteLink, ...projectData.links]
const creditsText = projectData.footer.credits.text

const mappedLinks = cvLinks.map((link) => (
  <a
    key={link.name}
    className={styles.footerIconLink}
    href={link.url}
    target="_blank"
  >
    <link.iconComponent size={25} />
    <div>{link.name}</div>
  </a>
))

export const Footer: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.linksWrapper}>{mappedLinks}</div>

      <div className={styles.madeBy}>{creditsText}</div>
    </div>
  )
}
