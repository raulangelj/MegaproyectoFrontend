import { RootStackParamList } from '@navigations/types/RootParamList'
import { SvgProps } from 'react-native-svg'

export type DayTime = string

export interface Activity {
  key: string
  name: string
  route: keyof RootStackParamList
  cardColor: string
  shortDescription: string
  image: React.FC<SvgProps>
  type: DayTime[]
  longDescription?: string
  complexity: number
}
