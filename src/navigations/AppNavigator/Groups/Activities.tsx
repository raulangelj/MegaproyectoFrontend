import React from 'react'
import { RootStack } from '@navigations/AppNavigator'
// import ActivitiesMenu from '@pages/ActivitiesMenu'
import ActivitiesList from '@modules/Activities/pages/ActivitiesList'
import ActivitiesShuffle from '@modules/Activities/pages/ActivitiesShuffle'

export default () => (
  <RootStack.Group key="ActivitiesGroup">
    <RootStack.Screen name="ActivitiesShuffle" component={ActivitiesShuffle} />
    <RootStack.Screen name="ActivitiesList" component={ActivitiesList} />
  </RootStack.Group>
)
