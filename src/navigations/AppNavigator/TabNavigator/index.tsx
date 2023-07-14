import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HistoryReport from '@pages/HistoryReport'
import Report from '@pages/Report'
import MainReport from '@pages/MainReportPage'
import { ReportTabsParamList } from '@navigations/types/RootParamList'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator<ReportTabsParamList>()

const Stack = createNativeStackNavigator<ReportTabsParamList>()

const ReportStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MainReport"
      component={MainReport}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Report"
      component={Report}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

const TabNavigator: React.FC<RootStackScreenProps<'TabNavigator'>> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        options={{
          title: 'Reporte',
          tabBarIcon: () => (
            <Icon name="file-document-edit-outline" size={20} color="black" />
          ),
          headerShown: false,
        }}
        component={ReportStack}
      />
      <Tab.Screen
        name="HistoryReport"
        options={{
          title: 'Historial',
          tabBarIcon: () => <Icon name="history" size={20} color="black" />,
          headerShown: false,
        }}
        component={HistoryReport}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
