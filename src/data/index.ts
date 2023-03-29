import { ProjectDataType } from '@/data/types'
import { education, events, jobs } from '@/data/experiences'
import { footer } from '@/data/footer'
import { links } from '@/data/links'

export const projectData: ProjectDataType = {
  header: {
    sentenceStart: "Hello, it's ",
    magicText: 'Gian',
  },
  subheader: [
    'An Italian 🇮🇹 Frontend Software Engineer in Zurich 🇨🇭',
    'I love how computer science can digitize, speed up and automate work operations in everyday life.',
  ],
  experiences: {
    jobs,
    events,
    education,
  },
  links,
  footer,
}
