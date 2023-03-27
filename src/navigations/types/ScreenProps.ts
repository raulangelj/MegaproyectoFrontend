import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ReportTabsParamList, RootStackParamList } from './RootParamList'
/**
 * This intefaces can be used with the useRoute hook or React.FC for navigators direct child components.
 * We can create one interface for each navigator
 *
 * Example 1:
 * const { params } = useRoute<TopTabsScreenProps<'StorefrontCatalog'>>()
 *
 * Example 2:
 * const YourComponent: React.FC<TopTabsScreenProps<'StorefrontCatalog'>> = ({ route: { params } }) => { }
 */

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export type ReportTabsScreenProps<T extends keyof ReportTabsParamList> =
  NativeStackScreenProps<ReportTabsParamList, T>
