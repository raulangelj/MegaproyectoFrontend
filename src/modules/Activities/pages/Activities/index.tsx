import React from 'react'
import { ButtonWrapper, Container } from './styles'
import Text from '@components/atoms/Text'
import LandingIcon from '@assets/images/activities_landing.svg'
import LandingIconDay from '@assets/images/activities_landing_day.svg'
import NightToggle from '@assets/images/night_toggle.svg'
import DayToggle from '@assets/images/day_toggle.svg'
import Button from '@components/atoms/Button'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { TouchableOpacity } from 'react-native'
import { useAppSelector } from 'hooks/useAppSelector'
import { toggleTheme } from 'store/theme'

const Activities: React.FC<RootStackScreenProps<'Activities'>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch()
  const themeName = useAppSelector(state => state.theme.theme.name)

  return (
    <Container>
      <Text
        color="activityForeground0"
        type="h1"
        style={{
          width: '50%',
          textAlign: 'center',
        }}>
        Bienvenido a tus actividades
      </Text>
      <TouchableOpacity
        onPress={() => {
          if (themeName === 'dark') {
            dispatch(toggleTheme('light'))
          } else {
            dispatch(toggleTheme('dark'))
          }
        }}>
        {themeName === 'dark' ? <NightToggle /> : <DayToggle />}
      </TouchableOpacity>
      <Text
        color="activityForeground0"
        type="pMedium"
        style={{
          width: '65%',
          textAlign: 'center',
        }}>
        Realiza como mínimo 3 actividades por día para llegar a la meta del día.
      </Text>
      {themeName === 'dark' ? <LandingIcon /> : <LandingIconDay />}
      <ButtonWrapper>
        <Button
          onPress={function (): void {
            navigation.navigate('ActivitiesShuffle')
          }}
          text="Iniciemos"
          size="block"
          color="activitySecondary"
          textColor="activityForeground0"
          textType="buttonMedium"
          borderRadius={50}
        />
      </ButtonWrapper>
    </Container>
  )
}

export default Activities
