/* eslint-disable react-native/no-inline-styles */
import Text from '@components/atoms/Text'
import React from 'react'
import { useUserStore } from 'hooks'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Button from '@components/atoms/Button'
import { Container, MainContainer, ButtonsContainer } from './styles'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import { View, ImageBackground, TouchableOpacity, Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Modal from '@components/molecules/Modal'
import DatePicker from 'react-native-date-picker'
import RNCalendarEvents from 'react-native-calendar-events'
import { ScrollView } from '@pages/auth/styles'

const Profile: React.FC<RootStackScreenProps<'Profile'>> = ({ navigation }) => {
  const { user } = useUserStore()
  const [notification, setNotification] = React.useState(false)
  const [initDate, setInitDate] = React.useState(new Date())
  const [endDate, setEndDate] = React.useState(new Date())
  const [date, setDate] = React.useState(new Date())

  //calendar event

  const calendarEvent = async (
    initDateParam: Date,
    endDateParam: Date,
    hourDate: Date,
  ) => {
    //get permission
    const authStatus = await RNCalendarEvents.requestPermissions()
    console.log(authStatus)
    let hour = hourDate.getHours()
    let minutes = hourDate.getMinutes()
    //set the hour + 6 hours
    hour = hour + 6
    initDateParam.setHours(hour)
    initDateParam.setMinutes(minutes)
    initDateParam.setSeconds(0)
    endDateParam.setHours(hour)
    endDateParam.setMinutes(minutes)
    endDateParam.setSeconds(0)
    //create event
    const eventId = await RNCalendarEvents.saveEvent('Diario reflexivo 2', {
      startDate: initDateParam.toISOString(),
      alarms: [{ date: 1 }],
      recurrenceRule: {
        frequency: 'daily',
        endDate: endDateParam.toISOString(),
        occurrence: 1,
        interval: 1,
      },
      allDay: false,
      notes: 'Recuerda llenar tu diario reflexivo',
    }).catch(error => console.log(error))
  }

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
              //console.log('Reporte generado')
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
              //console.log('Reporte generado')
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
              //console.log('Reporte generado')
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
      <>
        <Modal
          isVisible={notification}
          onClose={() => {
            setNotification(!notification)
          }}
          text={''}>
          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              <Text type={'h2'} color="quinary">
                Selecciona fecha de inicio
              </Text>
              <DatePicker
                date={initDate}
                onDateChange={setInitDate}
                mode="date"
                textColor="black"
                fadeToColor="white"
                style={{ width: 200 }}
                locale="es"
              />
              <Text type={'h2'} color="quinary">
                Selecciona fecha de fin
              </Text>
              <DatePicker
                date={endDate}
                onDateChange={setEndDate}
                mode="date"
                textColor="black"
                fadeToColor="white"
                style={{ width: 200 }}
                locale="es"
              />
              <Text type={'h2'} color="quinary">
                Selecciona hora
              </Text>
              <DatePicker
                date={date}
                onDateChange={setDate}
                mode="time"
                textColor="black"
                fadeToColor="white"
                style={{ width: 200 }}
                locale="es"
              />
              <Button
                text="Aceptar"
                onPress={() => {
                  const timezoneOffset = date.getTimezoneOffset()
                  const newCorrectedDate = new Date(
                    date.getTime() - timezoneOffset * 60 * 1000,
                  )
                  // Notifications.scheduleNotification(newCorrectedDate)
                  calendarEvent(initDate, endDate, newCorrectedDate)
                  setNotification(!notification)
                }}
                size={'small'}
                textType={'buttonLarge'}
              />
            </View>
          </ScrollView>
        </Modal>
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
              {Platform.OS === 'android' ? (
                <TouchableOpacity
                  onPress={() => {
                    setNotification(!notification)
                  }}>
                  <Ionicons
                    name="calendar"
                    size={30}
                    color="white"
                    style={{ marginTop: 20 }}
                  />
                </TouchableOpacity>
              ) : null}
            </Container>
          </ImageBackground>
          <ButtonsContainer>
            <Button
              text="Diario reflexivo"
              onPress={() => {
                navigation.navigate('MainReport')
              }}
              size="large"
              textType="buttonLarge"
              color="quinary"
              borderRadius={10}
              textColor="background0"
            />
          </ButtonsContainer>
        </MainContainer>
      </>
    )
  }
}

export default Profile
