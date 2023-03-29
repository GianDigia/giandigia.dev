import { SlSocialLinkedin } from 'react-icons/sl'
import { FiGithub, FiMail } from 'react-icons/fi'
import { SiDevpost, SiMedium } from 'react-icons/si'
import { IconLinkType, LinksType } from '@/data/types/links'
import { AiOutlineHome } from 'react-icons/ai'

export const links: LinksType = [
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
    iconComponent: FiMail,
    name: 'Email',
    url: 'mailto:digiacomogianmarco@gmail.com',
  },
  {
    iconComponent: SiMedium,
    name: 'Medium',
    url: 'https://www.medium.com/@giandigia',
  },
]

export const webSiteLink: IconLinkType = {
  name: 'Website',
  url: 'https://giandigia.dev/',
  iconComponent: AiOutlineHome,
}
