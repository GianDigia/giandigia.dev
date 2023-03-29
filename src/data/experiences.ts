import { ExperienceType } from '@/data/types/experiences'
import { TbShare3 } from 'react-icons/tb'
import { AiOutlineTrophy } from 'react-icons/ai'
import {
  php,
  css,
  html,
  ruby,
  react,
  jQuery,
  javaScript,
  graphQL,
  typeScript,
  redux,
  storyBook,
} from '@/data/technologies'

const genericBadgeIcon = TbShare3
const winnerBadgeIcon = AiOutlineTrophy

export const jobs: ExperienceType = {
  title: 'Experience',
  items: [
    {
      dates: {
        from: 'May 2022',
      },
      title: 'Frontend Software Engineer',
      organization: 'at-point',
      description:
        'During my time at at-point, I had the opportunity to work on various projects for our banking clients, which aimed to digitalize their flows and products. I worked collaboratively with teams on some projects and independently on others. My responsibilities included working on the styling, performance, and implementation of these pre-existing projects, trying to push for well-typed code and best practices during the refactors.',
      technologies: [react, typeScript, css, ruby],
    },
    {
      dates: {
        from: 'Mar 2022',
        to: 'Apr 2022',
      },
      title: 'Frontend Software Engineer',
      organization: 'Neulabs',
      description:
        "Neulabs's mission is to discover, acquire, improve, and internationalize direct-to-consumer brands. During my two-month tenure at Neulabs, I collaborated with a colleague to create a new multi-theme design system that would be used across all subsequent customer websites. We designed and implemented the system from scratch and structured the theming functionalities over the Emotion library.",
      technologies: [react, typeScript, css, storyBook, graphQL],
    },
    {
      dates: {
        from: 'Jan 2020',
        to: 'Feb 2022',
      },
      title: 'Frontend Software Engineer',
      organization: 'Fatture in Cloud',
      description:
        'Fatture in Cloud is the most used Italian invoicing software with more than 500k paying customers. In Fatture in Cloud I spent the majority of my time converting the product from a PHP project with some standalone React modules to a React single page application saving most of the already existing codebase, always aiming to follow modern best practices and to deliver clean, optimized and well-typed code. I also gained experience mentoring colleagues and managing the internal design system',
      technologies: [react, redux, typeScript, css, storyBook, php],
    },
    {
      dates: {
        from: 'May 2018',
        to: 'Aug 2019',
      },
      title: 'Full Stack Software Engineer',
      organization: 'Pix Group Italia',
      description:
        "Pix creates product distribution solutions for large homogeneous groups, particularly for schools. As part of a 2 man team, my work consisted in the design, implementation and maintenance of the company's internal management software. The software was built in Ruby on Rails. It had responsive views and dozen of thousands of product records imported from different suppliers.",

      technologies: [html, css, javaScript, jQuery, ruby],
    },
    {
      title: 'Full Stack Developer',
      organization: 'Contractor',
      dates: {
        from: 'Dec 2015',
        to: 'Oct 2017',
      },
      description:
        "Develop a web application to create and manage insurance policies. At the beginning of my Web Developer career, I worked for a friend's parents which needed a web application to manage their clients' data.",
      technologies: [html, css, javaScript, php],
      isOnResume: false,
    },
  ],
}

export const events: ExperienceType = {
  title: 'Events',
  items: [
    {
      title: 'HackUPC 2019',
      organization: 'Hackathon in Barcelona',
      badge: {
        iconComponent: genericBadgeIcon,
        link: 'https://devpost.com/software/sky-invaders',
      },
      dates: {
        from: 'Oct 2019',
        to: 'Oct 2019',
      },
    },
    {
      title: 'StartHack 2019',
      organization: 'Hackathon in Saint Gallen',
      badge: {
        iconComponent: genericBadgeIcon,
        link: 'https://devpost.com/software/chrome-voice-authentication',
      },
      dates: {
        from: 'Mar 2019',
        to: 'Mar 2019',
      },
    },
    {
      title: 'Google HashCode 2019',
      organization: 'University of Trento',
      dates: {
        from: 'Mar 2019',
        to: 'Mar 2019',
      },
    },
    {
      title: 'HackUPC 2018',
      organization: 'Hackathon in Barcelona',
      badge: {
        iconComponent: winnerBadgeIcon,
        link: 'https://devpost.com/software/yeswecan',
      },
      dates: {
        from: 'Oct 2018',
        to: 'Oct 2018',
      },
    },
    {
      title: 'Google HashCode 2018',
      organization: 'University of Trento',
      dates: {
        from: 'Mar 2018',
        to: 'Mar 2018',
      },
    },
  ],
}

export const education: ExperienceType = {
  title: 'Education',
  items: [
    {
      title: 'Bachelor Degree in Computer Science',
      organization: 'University of Trento',
      dates: {
        from: 'Sep 2016',
        to: 'Mar 2020',
      },
    },
    {
      title: 'High School in IT',
      organization: 'ISIS A. Malignani',
      dates: {
        from: 'Sep 2011',
        to: 'Jun 2016',
      },
    },
  ],
}
