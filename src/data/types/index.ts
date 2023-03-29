import { FooterType } from '@/data/types/footer'
import { ExperienceType } from '@/data/types/experiences'
import { HeaderType } from '@/data/types/header'
import { LinksType } from '@/data/types/links'

export type ProjectDataType = {
  header: HeaderType
  subheader: string[]
  experiences: {
    jobs: ExperienceType
    events: ExperienceType
    education: ExperienceType
  }
  links: LinksType
  footer: FooterType
}
