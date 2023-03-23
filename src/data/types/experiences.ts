import { IconType } from 'react-icons/lib'

export type ExperienceType = {
  title: string
  items: ItemType[]
}

export type ItemType = {
  dates: DatesType
  title: string
  organization?: string
  badge?: BadgeType
  description?: string
  hidden?: boolean
  technologies?: TechnologyType[]
}

export type TechnologyType = {
  name: string
  iconComponent: IconType
}

export type BadgeType = {
  iconComponent: IconType
  link?: string
}

export type DatesType = {
  from: string
  to?: string
}
