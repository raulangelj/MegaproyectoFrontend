import React from 'react'
import { Container, TopNavigation } from './styles'
import LandingIcon from '@assets/images/back_button.svg'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import { TouchableOpacity } from 'react-native'

const ActivitiesList: React.FC<RootStackScreenProps<'ActivitiesList'>> = ({
  navigation,
}) => {
  return (
    <Container>
      <TopNavigation>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}>
          <LandingIcon height={24} width={17} />
        </TouchableOpacity>
      </TopNavigation>
    </Container>
  )
}

export default ActivitiesList
