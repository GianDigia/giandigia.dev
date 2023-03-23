import { FooterType } from '@/data/types/footer'
import { ExperienceType } from '@/data/types/experiences'
import { HeaderType } from '@/data/types/header'

export type ProjectDataType = {
  header: HeaderType
  experiences: {
    jobs: ExperienceType
    events: ExperienceType
    education: ExperienceType
  }
  footer: FooterType
}
