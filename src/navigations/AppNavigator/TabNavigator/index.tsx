import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HistoryReport from '@pages/HistoryReport'
import Report from '@pages/Report'
import { ReportTabsParamList } from '@navigations/types/RootParamList'

const Tab = createBottomTabNavigator<ReportTabsParamList>()
const TabNavigator: React.FC<RootStackScreenProps<'TabNavigator'>> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Report" component={Report} />
      <Tab.Screen name="HistoryReport" component={HistoryReport} />
    </Tab.Navigator>
  )
}

export default TabNavigator
