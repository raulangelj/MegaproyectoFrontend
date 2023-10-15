import React from 'react'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import Background from '@modules/Activities/components/atoms/Background'
import BackNavigation from '@modules/Activities/components/molecules/BackNavigation'
import { TextWrapper } from './styles'
import ActivityTabs from '@navigations/TopTabsNavigation'

const ActivitiesList: React.FC<RootStackScreenProps<'ActivitiesList'>> = ({
  navigation,
}) => {
  return (
    <Background>
      <BackNavigation method={() => navigation.goBack()}>
        <TextWrapper type="h1" color="activityForeground0">
          {'¡Bienvenido!'}
        </TextWrapper>
      </BackNavigation>
      <ActivityTabs />
    </Background>
  )
}

export default ActivitiesList
