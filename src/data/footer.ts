import { FiGithub } from 'react-icons/fi'
import { SiDevpost, SiGmail, SiMedium } from 'react-icons/si'
import { SlSocialLinkedin } from 'react-icons/sl'
import { FooterType } from '@/data/types/footer'

export const footer: FooterType = {
  links: [
    {
      iconComponent: SlSocialLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/giandigia/',
    },
    {
      iconComponent: FiGithub,
      name: 'GitHub',
      url: 'https://www.github.com/GianDigia',
    },
    {
      iconComponent: SiDevpost,
      name: 'Devpost',
      url: 'https://www.devpost.com/GianDigia',
    },
    {
      iconComponent: SiGmail,
      name: 'Email',
      url: 'mailto:digiacomogianmarco@gmail.com',
    },
    {
      iconComponent: SiMedium,
      name: 'Medium',
      url: 'https://www.medium.com/@giandigia',
    },
  ],
  credits: {
    text: 'Designed & Built with ♥️ by Gianmarco Digiacomo',
    url: 'https://github.com/GianDigia/giandigia.dev',
  },
}
