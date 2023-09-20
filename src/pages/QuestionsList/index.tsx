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
import { Modal, ScrollView, View } from 'react-native'
import Button from '@components/atoms/Button'
import SelectDropdown from 'react-native-select-dropdown'
import { lightColors } from '@themes/colors'
import { CardContainer } from '@pages/Report/styles'
import { usePsychologyStore } from 'hooks'

const QuestionsList: React.FC<
  PsychologyTabsScreenProps<'QuestionsList'>
> = () => {
  const [visible, setVisible] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [selectItem, setSelectItem] = React.useState('')
  const { psychologyQuestions, setQuestionsPsychology } = usePsychologyStore()

  useFocusEffect(
    React.useCallback(() => {
      setQuestionsPsychology()
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
            <ScrollView
              contentContainerStyle={{
                height: '100vh',
                marginBottom: 5,
                backgroundColor: 'green',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
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
                  <Text type={'pLarge'}>Primera opcion</Text>
                  <TextInput onChangeText={setValue} value={value} />
                  <Text type={'pLarge'}>Segunda opcion (opcional)</Text>
                  <TextInput onChangeText={setValue} value={value} />
                  <Text type={'pLarge'}>Tercera opcion (opcional)</Text>
                  <TextInput onChangeText={setValue} value={value} />
                  <Text type={'pLarge'}>Cuarta opcion (opcional)</Text>
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
            </ScrollView>
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
        data={psychologyQuestions}
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
