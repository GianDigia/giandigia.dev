import { IconType } from 'react-icons/lib'

export type LinksType = IconLinkType[]

export type IconLinkType = {
  iconComponent: IconType
  name: string
  url: string
}
