import React from 'react'
import { RootStack } from '@navigations/AppNavigator'
import TabNavigator from '@navigations/AppNavigator/TabNavigator'
import HistoryView from '@pages/HistoryView'

export default () => (
  <RootStack.Group key="ReportGroup">
    <RootStack.Screen name="TabNavigator" component={TabNavigator} />
    <RootStack.Screen name="HistoryView" component={HistoryView} />
  </RootStack.Group>
)
