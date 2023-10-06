import Text from '@components/atoms/Text'
import React from 'react'
import { useUserStore } from 'hooks'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Button from '@components/atoms/Button'
import { Container, MainContainer, ButtonsContainer } from './styles'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'

const Profile: React.FC<RootStackScreenProps<'Profile'>> = ({ navigation }) => {
  const { user } = useUserStore()
  if (user && user?.category === 'psychology') {
    return (
      <MainContainer>
        <Container>
          <FontAwesome name="user" size={30} color="black" />
          <Text type={'h1'}>Bienvenido </Text>
          <Text type={'h1'}>{user?.name}</Text>
          <Text type={'h1'}>{user?.email}</Text>
        </Container>
        <ButtonsContainer>
          <Button
            text="Ver mis pacientes"
            onPress={() => {
              console.log('Reporte generado')
              navigation.navigate('PsychologyNavigator', {
                screen: 'PatientList1',
              })
            }}
            size="large"
            textType="buttonLarge"
            color="secondary"
            borderRadius={10}
            textColor="background0"
          />
          <Button
            text="Ver preguntas reflexivas"
            onPress={() => {
              console.log('Reporte generado')
              navigation.navigate('PsychologyNavigator', {
                screen: 'QuestionsList1',
              })
            }}
            size="large"
            textType="buttonLarge"
            color="secondary"
            borderRadius={10}
            textColor="background0"
          />
        </ButtonsContainer>
      </MainContainer>
    )
  } else {
    return (
      //evaluate if category is psychology or nutrition

      <MainContainer>
        <Container>
          <FontAwesome name="user" size={30} color="black" />
          <Text type={'h1'}>Bienvenido </Text>
          <Text type={'h1'}>{user?.name}</Text>
          <Text type={'h1'}>{user?.email}</Text>
        </Container>
        <ButtonsContainer>
          <Button
            text="Diario reflexivo"
            onPress={() => {
              console.log('Reporte generado')
              navigation.navigate('TabNavigator', { screen: 'Main' })
            }}
            size="large"
            textType="buttonLarge"
            color="secondary"
            borderRadius={10}
            textColor="background0"
          />
        </ButtonsContainer>
      </MainContainer>
    )
  }
}

export default Profile
