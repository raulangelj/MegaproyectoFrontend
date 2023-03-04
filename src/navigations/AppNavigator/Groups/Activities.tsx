import React from 'react'
import { RootStack } from '@navigations/AppNavigator'
import ActivitiesMenu from '@pages/ActivitiesMenu'

export default () => (
  <RootStack.Group key="ActivitiesGroup">
    <RootStack.Screen name="ActivitiesMenu" component={ActivitiesMenu} />
  </RootStack.Group>
)
