import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Chat from '@pages/Chat'
// import Chat from './Chat'
import Activities from '@modules/Activities/pages/Activities'
import Profile from '@pages/Profile'
import { RootStack } from '@navigations/AppNavigator'
import Icon from 'react-native-vector-icons/Ionicons'
import IconAnt from 'react-native-vector-icons/AntDesign'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import { RootStackParamList } from '@navigations/types/RootParamList'
import TabNavigator from '@navigations/AppNavigator/TabNavigator'
import PsychologyNavigator from '@navigations/AppNavigator/PsychologyNavigator'

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
        }}
      />
      <MainBottomTab.Screen
        name="Activities"
        component={Activities}
        options={{
          headerShown: false,
          title: 'Actividades',
          tabBarIcon: ActivitiesIcon,
        }}
      />
      <MainBottomTab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Chat',
          tabBarIcon: ChatIcon,
        }}
      />
    </MainBottomTab.Navigator>
  )
}

export default () => {
  return (
    <RootStack.Group key="Landing">
      <RootStack.Screen name="Landing" component={MainBottomTabNavigator} />
      <RootStack.Screen name="TabNavigator" component={TabNavigator} />
      <RootStack.Screen
        name="PsychologyNavigator"
        component={PsychologyNavigator}
      />
    </RootStack.Group>
  )
}
