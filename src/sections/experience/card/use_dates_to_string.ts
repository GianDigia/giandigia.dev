import { present } from '@/data/preferences'
import { DatesType } from '@/data/types/experiences'

export const useDatesToString = ({ from, to }: DatesType) => {
  if (!to) return `${from} - ${present}`

  if (from === to) return from

  return `${from} - ${to}`
}
