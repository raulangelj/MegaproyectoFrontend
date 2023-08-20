import React from 'react'
import { ButtonWrapper, Container } from './styles'
import Text from '@components/atoms/Text'
import LandingIcon from '@assets/images/activities_landing.svg'
import Button from '@components/atoms/Button'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'

const Activities: React.FC<RootStackScreenProps<'ActivitiesMenu'>> = ({
  navigation,
}) => {
  return (
    <Container>
      <Text type="h1">Bienvenido a tus actividades</Text>
      <LandingIcon />
      <ButtonWrapper>
        <Button
          onPress={function (): void {
            navigation.navigate('ActivitiesList')
          }}
          text="Iniciemos"
          size="block"
          color="white"
          textType="buttonMedium"
          borderRadius={50}
        />
      </ButtonWrapper>
    </Container>
  )
}

export default Activities
