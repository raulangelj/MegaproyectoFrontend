import React from 'react'
import { RootStack } from '@navigations/AppNavigator'
// import ActivitiesMenu from '@pages/ActivitiesMenu'
import Activities from '@modules/Activities/pages/Activities'
import ActivitiesList from '@modules/Activities/pages/ActivitiesList'

export default () => (
  <RootStack.Group key="ActivitiesGroup">
    <RootStack.Screen name="ActivitiesMenu" component={Activities} />
    <RootStack.Screen name="ActivitiesList" component={ActivitiesList} />
  </RootStack.Group>
)
