import { PsychologyTabsScreenProps } from '@navigations/types/ScreenProps'
import {
  FlatList,
  TitleContainer,
  CardTouchable,
} from '@pages/QuestionsList/styles'
import Text from '@components/atoms/Text'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const QuestionsList: React.FC<
  PsychologyTabsScreenProps<'QuestionsList'>
> = () => {
  const [questions, setQuestions] = React.useState([])
  //make the request to get patients
  const getQuestions = async () => {
    await axios
      .get('http://192.168.1.3:400/api/report/getAllQuestions', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NGRmYzExOTllNWJlYmI3YjJlZWRjOGEiLCJuYW1lIjoiQnJ5YW5uIFBzaWNvbG9nbyIsImlhdCI6MTY5MzA5MzkwMSwiZXhwIjoxNjkzMTAxMTAxfQ.d8s2JcIciU4mexO1800mcNy7kIctCSo_H3cmuXu0GXM',
        },
      })
      .then(response => {
        console.log('RESPONSE', response.data)
        setQuestions(response.data.questions)
      })
      .catch(error2 => {
        console.log(error2)
      })
  }

  useFocusEffect(
    React.useCallback(() => {
      getQuestions()
    }, []),
  )

  return (
    <>
      <TitleContainer>
        <Text type="pLarge" color="quaternary">
          Lista de preguntas
        </Text>
        <AntDesign name="addfile" size={20} color="black" />
      </TitleContainer>
      <FlatList
        data={questions}
        renderItem={({ item }) => (
          <CardTouchable>
            <Text type="pLarge">{item.question}</Text>
            <Text type="pLarge">Tipo: {item.type}</Text>
          </CardTouchable>
        )}
      />
    </>
  )
}

export default QuestionsList
