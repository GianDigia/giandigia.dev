import { ProjectDataType } from '@/data/types'
import { education, events, jobs } from '@/data/experiences'
import { footer } from '@/data/footer'

export const projectData: ProjectDataType = {
  header: {
    sentenceStart: "Hello, it's ",
    magicText: 'Gian',
  },
  subheader:
    "I'm a Frontend Software Engineer from Italy 🇮🇹 currently based in Zurich 🇨🇭",
  experiences: {
    jobs,
    events,
    education,
  },
  footer,
}
