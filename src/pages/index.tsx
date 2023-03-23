import Head from 'next/head'
import { Experience } from '@/sections/experience'
import { education, events, jobs } from '@/data/experiences'

const Home = () => (
  <>
    <Head>
      <title>giandigia.dev</title>
      <meta
        name="description"
        content="I’m Gian and I’m a Frontend Software Engineer!"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Experience experience={jobs} />
    <Experience experience={events} />
    <Experience experience={education} />
  </>
)

export default Home
