import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HistoryReport from '@pages/HistoryReport'
import Report from '@pages/Report'
import { ReportTabsParamList } from '@navigations/types/RootParamList'
import ReportIcon2 from '../../../assets/images/iconTres.svg'
import HistoryIcon from '../../../assets/images/historyIcon.svg'

const Tab = createBottomTabNavigator<ReportTabsParamList>()
const TabNavigator: React.FC<RootStackScreenProps<'TabNavigator'>> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Report"
        options={{
          title: 'Reporte',
          tabBarIcon: () => <ReportIcon2 width={20} height={20} />,
          headerShown: false,
        }}
        component={Report}
      />
      <Tab.Screen
        name="HistoryReport"
        options={{
          title: 'Historial',
          tabBarIcon: () => <HistoryIcon width={20} height={20} />,
          headerShown: false,
        }}
        component={HistoryReport}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
