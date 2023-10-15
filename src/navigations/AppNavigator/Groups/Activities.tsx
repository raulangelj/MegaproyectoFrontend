import React from 'react'
import { RootStack } from '@navigations/AppNavigator'
import ActivitiesList from '@modules/Activities/pages/ActivitiesList'
import ActivitiesShuffle from '@modules/Activities/pages/ActivitiesShuffle'
import Diario from '@modules/Activities/pages/Diario'
import SimpleActivity from '@modules/Activities/pages/SimpleActivity'
import SelectPreffered from '@modules/Activities/pages/SelectPreffered'

export default () => (
  <RootStack.Group key="ActivitiesGroup">
    <RootStack.Screen name="ActivitiesShuffle" component={ActivitiesShuffle} />
    <RootStack.Screen name="SimpleActivity" component={SimpleActivity} />
    <RootStack.Screen name="ActivitiesList" component={ActivitiesList} />
    <RootStack.Screen name="Diario" component={Diario} />
    <RootStack.Screen name="SelectPreffered" component={SelectPreffered} />
  </RootStack.Group>
)
