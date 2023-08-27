import React from 'react'
import { RootStack } from '@navigations/AppNavigator'
import PsychologyNavigator from '@navigations/AppNavigator/PsychologyNavigator'

export default () => (
  <RootStack.Group key="PsychologyGroup">
    <RootStack.Screen
      name="PsychologyNavigator"
      component={PsychologyNavigator}
    />
  </RootStack.Group>
)
