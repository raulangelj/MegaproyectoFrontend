/* eslint-disable react-native/no-inline-styles */
import { PsychologyTabsScreenProps } from '@navigations/types/ScreenProps'
import {
  FlatList,
  TitleContainer,
  CardTouchable,
  IconTouchable,
  ModalContainer,
  ModalView,
  Touchable,
  ButtonContainer,
  TextInput,
} from '@pages/QuestionsList/styles'
import Text from '@components/atoms/Text'
import React from 'react'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Modal } from 'react-native'
import Button from '@components/atoms/Button'
import SelectDropdown from 'react-native-select-dropdown'
import { lightColors } from '@themes/colors'
import { CardContainer } from '@pages/Report/styles'

const QuestionsList: React.FC<
  PsychologyTabsScreenProps<'QuestionsList'>
> = () => {
  const [questions, setQuestions] = React.useState([])
  const [visible, setVisible] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [selectItem, setSelectItem] = React.useState('')
  //make the request to get patients
  const getQuestions = async () => {
    await axios
      .get('http://10.100.2.14:400/api/report/getAllQuestions', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NGRmYzExOTllNWJlYmI3YjJlZWRjOGEiLCJuYW1lIjoiQnJ5YW5uIFBzaWNvbG9nbyIsImlhdCI6MTY5MzYwMDM5MiwiZXhwIjoxNjkzNjA3NTkyfQ.uusu4AWOt2GW3btVyHIjme0X3AKEoBYrpBp5bzlIIhk',
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
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setVisible(!visible)
        }}
        visible={visible}>
        <ModalContainer>
          <ModalView>
            <Text type={'h1'}>Crear pregunta</Text>
            <CardContainer>
              <Text type={'pLarge'}>Pregunta</Text>
              <TextInput onChangeText={setValue} value={value} />
              <Text type={'pLarge'}>Tipo</Text>
              <SelectDropdown
                data={['input', 'checkbox', 'options', 'slider']}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                  setSelectItem(selectedItem)
                }}
                buttonStyle={{
                  borderRadius: 5,
                  backgroundColor: lightColors.secondary,
                }}
              />
            </CardContainer>
            {selectItem === 'options' && (
              <>
                <Text type={'pLarge'}>Escribe las opciones</Text>
                <TextInput onChangeText={setValue} value={value} />
              </>
            )}
            {selectItem === 'checkbox' && (
              <>
                <Text type={'pLarge'}>Escribe las opciones</Text>
                <TextInput onChangeText={setValue} value={value} />
              </>
            )}

            <ButtonContainer>
              <Button
                textType="buttonMedium"
                size="medium"
                text="Cancelar"
                onPress={() => {
                  setVisible(!visible)
                }}
              />
              <Button
                textType="buttonMedium"
                size="medium"
                text="Guardar"
                onPress={() => {}}
              />
            </ButtonContainer>
          </ModalView>
        </ModalContainer>
      </Modal>
      <TitleContainer>
        <Text type="pLarge" color="quaternary">
          Lista de preguntas
        </Text>
        <IconTouchable
          onPress={() => {
            setVisible(!visible)
          }}>
          <AntDesign name="addfile" size={25} color="black" />
        </IconTouchable>
      </TitleContainer>
      <FlatList
        data={questions}
        renderItem={({ item }: { item: any }) => (
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
