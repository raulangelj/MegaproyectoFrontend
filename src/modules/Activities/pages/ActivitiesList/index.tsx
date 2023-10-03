import React from 'react'
import { TopNavigation } from './styles'
import LandingIcon from '@assets/images/back_button.svg'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import { TouchableOpacity } from 'react-native'
import Background from '@modules/Activities/components/atoms/Background'

const ActivitiesList: React.FC<RootStackScreenProps<'ActivitiesList'>> = ({
  navigation,
}) => {
  return (
    <Background>
      <TopNavigation>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}>
          <LandingIcon height={24} width={17} />
        </TouchableOpacity>
      </TopNavigation>
    </Background>
  )
}

export default ActivitiesList
