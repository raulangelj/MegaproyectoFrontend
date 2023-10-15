import React, { useCallback } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigations/types/RootParamList'
import Chat from '@navigations/AppNavigator/Groups/Chat'
import Activities from '@navigations/AppNavigator/Groups/Activities'
import SignIn from '@navigations/AppNavigator/Groups/auth'
import Report from '@navigations/AppNavigator/Groups/Report'
import Psychology from '@navigations/AppNavigator/Groups/Psychology'
import MainBottonNavigator from './Groups/Landing'

export const RootStack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator: React.FC = () => {
  const screenForAppState = useCallback(() => {
    return [SignIn(), MainBottonNavigator(), Activities()]
  }, [])

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          presentation: 'card',
          headerShown: false,
          headerTransparent: true,
          orientation: 'portrait',
        }}>
        {screenForAppState()}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
