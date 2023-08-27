import { PsychologyTabsScreenProps } from '@navigations/types/ScreenProps'
import {
  FlatList,
  TitleContainer,
  CardTouchable,
} from '@pages/PatientList/styles'
import Text from '@components/atoms/Text'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'

const PatientList: React.FC<PsychologyTabsScreenProps<'PatientList'>> = () => {
  const [patients, setPatients] = React.useState([])
  //make the request to get patients
  const getPatients = async () => {
    await axios
      .get('http://192.168.1.3:400/api/report/getAllPatients', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NGRmYzExOTllNWJlYmI3YjJlZWRjOGEiLCJuYW1lIjoiQnJ5YW5uIFBzaWNvbG9nbyIsImlhdCI6MTY5MzA5MzkwMSwiZXhwIjoxNjkzMTAxMTAxfQ.d8s2JcIciU4mexO1800mcNy7kIctCSo_H3cmuXu0GXM',
        },
      })
      .then(response => {
        console.log('RESPONSE', response.data)
        setPatients(response.data.patients)
      })
      .catch(error2 => {
        console.log(error2)
      })
  }

  useFocusEffect(
    React.useCallback(() => {
      getPatients()
    }, []),
  )

  return (
    <>
      <TitleContainer>
        <Text type="pLarge" color="quaternary">
          Lista de pacientes
        </Text>
        <Feather name="user-plus" size={20} color="black" />
      </TitleContainer>
      <FlatList
        data={patients}
        renderItem={({ item }) => (
          <CardTouchable>
            <Text type="pLarge">{item.name}</Text>
            <Text type="pLarge">{item.category}</Text>
            <Text type="pLarge">{item.email}</Text>
          </CardTouchable>
        )}
      />
    </>
  )
}

export default PatientList
