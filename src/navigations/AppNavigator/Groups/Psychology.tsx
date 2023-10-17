import React from 'react'
import { RootStack } from '@navigations/AppNavigator'
import PsychologyNavigator from '@navigations/AppNavigator/PsychologyNavigator'
import HistoryView from './HistoryView'

export default () => (
  <RootStack.Group key="PsychologyGroup1">
    <RootStack.Screen
      name="PsychologyNavigator"
      component={PsychologyNavigator}
    />
  </RootStack.Group>
)
