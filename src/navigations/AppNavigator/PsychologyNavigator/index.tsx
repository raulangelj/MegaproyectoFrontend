/* eslint-disable react/no-unstable-nested-components */
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import QuestionsList from '@pages/QuestionsList'
import PatientList from '@pages/PatientList'
import StatsPsychology from '@pages/StatsPsychology'
import { PsychologyTabsParamList } from '@navigations/types/RootParamList'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator<PsychologyTabsParamList>()

const Stack = createNativeStackNavigator<PsychologyTabsParamList>()

const PatientStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PatientList"
      component={PatientList}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

const QuestionStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="QuestionsList"
      component={QuestionsList}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

const StatsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Statistics"
      component={StatsPsychology}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

const PsychologyNavigator: React.FC<
  RootStackScreenProps<'PsychologyNavigator'>
> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="PatientList1"
        options={{
          title: 'Pacientes',
          tabBarIcon: () => <Ionicon name="people" size={20} color="black" />,
          headerShown: false,
        }}
        component={PatientStack}
      />
      <Tab.Screen
        name="QuestionsList1"
        options={{
          title: 'Preguntas',
          tabBarIcon: () => (
            <Icon name="file-document-edit-outline" size={20} color="black" />
          ),
          headerShown: false,
        }}
        component={QuestionStack}
      />
      <Tab.Screen
        name="Statistics1"
        options={{
          title: 'Estadisticas',
          tabBarIcon: () => (
            <Ionicon name="stats-chart-outline" size={20} color="black" />
          ),
          headerShown: false,
        }}
        component={StatsStack}
      />
    </Tab.Navigator>
  )
}

export default PsychologyNavigator
