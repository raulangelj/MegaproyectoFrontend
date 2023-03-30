import React from 'react'
import { RootStack } from '@navigations/AppNavigator'
import HistoryView from '@pages/HistoryView'

export default () => (
  <RootStack.Group key="HistoryGroup">
    <RootStack.Screen name="HistoryView" component={HistoryView} />
  </RootStack.Group>
)
