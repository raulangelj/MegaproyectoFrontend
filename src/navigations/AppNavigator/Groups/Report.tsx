import React from 'react'
import { RootStack } from '@navigations/AppNavigator'
import TabNavigator from '@navigations/AppNavigator/TabNavigator'

export default () => (
  <RootStack.Group key="ReportGroup">
    <RootStack.Screen name="TabNavigator" component={TabNavigator} />
  </RootStack.Group>
)
