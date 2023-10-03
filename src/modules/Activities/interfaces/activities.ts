import { RootStackParamList } from '@navigations/types/RootParamList'

export interface Activity {
  name: string
  route: keyof RootStackParamList
  cardColor: string
  shortDescription: string
  image: number
  type: 'night' | 'day'
  longDescription?: string
}
