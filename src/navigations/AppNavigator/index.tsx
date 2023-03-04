import React, { useCallback } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigations/types/RootParamList'
import Chat from '@navigations/AppNavigator/Groups/Chat'
import Activities from '@navigations/AppNavigator/Groups/Activities'

export const RootStack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator: React.FC = () => {
  const screenForAppState = useCallback(() => {
    return [Chat(), Activities()]
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
