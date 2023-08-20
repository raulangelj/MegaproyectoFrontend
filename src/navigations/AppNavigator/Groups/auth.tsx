import React from 'react'
import { RootStack } from '@navigations/AppNavigator'
import { SignIn } from '@pages/auth'
import { SignUp } from '@pages/auth/signUp'

export default () => (
  <RootStack.Group key="AuthGroup">
    <RootStack.Screen name="SignIn" component={SignIn} />
    <RootStack.Screen name="SignUp" component={SignUp} />
  </RootStack.Group>
)
