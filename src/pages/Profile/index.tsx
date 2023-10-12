/* eslint-disable react-native/no-inline-styles */
import Text from '@components/atoms/Text'
import React from 'react'
import { useUserStore } from 'hooks'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Button from '@components/atoms/Button'
import { Container, MainContainer, ButtonsContainer } from './styles'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import Image from '../../assets/images/wav.svg'
import { View, ImageBackground } from 'react-native'

const Profile: React.FC<RootStackScreenProps<'Profile'>> = ({ navigation }) => {
  const { user } = useUserStore()
  if (user && user?.category === 'psychology') {
    return (
      <MainContainer>
        <ImageBackground
          source={require('../../assets/images/wickedbackground(1).png')}
          style={{
            flex: 1 / 2,
            width: '100%',
            alignItems: 'center',
          }}
          imageStyle={{
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <Container>
            <FontAwesome name="user" size={50} color="white" />
            <Text type={'h1'} color="background0">
              {user?.name}
            </Text>
            <Text type={'pMedium'} color="background0">
              {user?.email}
            </Text>
          </Container>
        </ImageBackground>
        <ButtonsContainer>
          <Button
            text="Ver mis pacientes"
            onPress={() => {
              console.log('Reporte generado')
              navigation.navigate('PsychologyNavigator', {
                screen: 'PatientList1',
              })
            }}
            style={{ borderRadius: 10 }}
            size="large"
            textType="buttonLarge"
            color="quinary"
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
            style={{ borderColor: 'white', borderWidth: 0 }}
            size="large"
            textType="buttonLarge"
            color="quinary"
            borderRadius={10}
            textColor="background0"
          />
          <Button
            text="Ver estadisticas"
            onPress={() => {
              console.log('Reporte generado')
              navigation.navigate('PsychologyNavigator', {
                screen: 'Statistics1',
              })
            }}
            style={{ borderColor: 'white', borderWidth: 0 }}
            size="large"
            textType="buttonLarge"
            color="quinary"
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
        <ImageBackground
          source={require('../../assets/images/wickedbackground(1).png')}
          style={{
            flex: 1 / 2,
            width: '100%',
            alignItems: 'center',
          }}
          imageStyle={{
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <Container>
            <FontAwesome name="user" size={50} color="white" />
            <Text type={'h1'} color="background0">
              {user?.name}
            </Text>
            <Text type={'pMedium'} color="background0">
              {user?.email}
            </Text>
          </Container>
        </ImageBackground>
        <ButtonsContainer>
          <Button
            text="Diario reflexivo"
            onPress={() => {
              console.log('Reporte generado')
              navigation.navigate('TabNavigator', { screen: 'Main' })
            }}
            size="large"
            textType="buttonLarge"
            color="quinary"
            borderRadius={10}
            textColor="background0"
          />
        </ButtonsContainer>
      </MainContainer>
    )
  }
}

export default Profile
