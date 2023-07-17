import React from 'react'
import { RootStack } from '@navigations/AppNavigator'
import { SignIn } from '@pages/auth'

export default () => (
  <RootStack.Group key="AuthGroup">
    <RootStack.Screen name="SignIn" component={SignIn} />
  </RootStack.Group>
)
