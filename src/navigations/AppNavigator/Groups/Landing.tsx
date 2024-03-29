import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Chat from '@pages/Chat'
// import Chat from './Chat'
import Activities from '@modules/Activities/pages/Activities'
import Profile from '@pages/Profile'
import MainReport from '@pages/MainReportPage'
import { RootStack } from '@navigations/AppNavigator'
import Icon from 'react-native-vector-icons/Ionicons'
import IconAnt from 'react-native-vector-icons/AntDesign'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import { RootStackParamList } from '@navigations/types/RootParamList'
import PsychologyNavigator from '../PsychologyNavigator'
import Report from '@pages/Report'

const ChatIcon = () => (
  <Icon name="chatbubbles-outline" size={25} color="black" />
)

const ActivitiesIcon = () => (
  <Icon name="game-controller-outline" size={25} color="black" />
)

const ProfileIcon = () => <IconAnt name="user" size={25} color="black" />

const MainBottomTab = createBottomTabNavigator<RootStackParamList>()

const MainBottomTabNavigator: React.FC<
  RootStackScreenProps<'Landing'>
> = () => {
  return (
    <MainBottomTab.Navigator>
      <MainBottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ProfileIcon,
          headerShown: false,
        }}
      />
      <MainBottomTab.Screen
        name="Activities"
        component={Activities}
        options={{
          headerShown: false,
          title: 'Actividades',
          tabBarIcon: ActivitiesIcon,
          headerShown: false,
        }}
      />
      <MainBottomTab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Chat',
          tabBarIcon: ChatIcon,
          headerShown: false,
        }}
      />
    </MainBottomTab.Navigator>
  )
}

export default () => {
  return (
    <RootStack.Group key="Landing">
      <RootStack.Screen name="Landing" component={MainBottomTabNavigator} />
      {/* <RootStack.Screen name="TabNavigator" component={TabNavigator} /> */}
      <RootStack.Screen name="MainReport" component={MainReport} />
      <RootStack.Screen name="Report" component={Report} />
      <RootStack.Screen
        name="PsychologyNavigator"
        component={PsychologyNavigator}
      />
    </RootStack.Group>
  )
}
