import { IconType } from 'react-icons/lib'

export type FooterType = {
  links: IconLinkType[]
  credits: CreditsType
}

type IconLinkType = {
  iconComponent: IconType
  name: string
  url: string
}

type CreditsType = {
  text: string
  url: string
}
