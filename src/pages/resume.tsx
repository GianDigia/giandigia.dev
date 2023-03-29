import { NextPageWithLayout } from '@/pages/_layout'
import styles from '@/pages/resume.module.scss'
import { Header } from '@/components/resume/header'
import { Footer } from '@/components/resume/footer'
import { Jobs } from '@/components/resume/jobs'
import { Events } from '@/components/resume/events'
import { Education } from '@/components/resume/education'
import { projectData } from '@/data'

const { jobs, events, education } = projectData.experiences

const Resume: NextPageWithLayout = () => (
  <div className={styles.wrapper}>
    <div className={styles.document}>
      <Header />

      <div className={styles.experiencesWrapper}>
        <Jobs {...jobs} />
        <div className={styles.eventsAndEducationWrapper}>
          <Events {...events} />
          <Education {...education} />
        </div>
      </div>

      <Footer />
    </div>
  </div>
)

Resume.getLayout = function getLayout(page) {
  return page
}

export default Resume
