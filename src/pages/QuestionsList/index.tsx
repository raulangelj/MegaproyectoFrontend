/* eslint-disable react-native/no-inline-styles */
import { PsychologyTabsScreenProps } from '@navigations/types/ScreenProps'
import {
  FlatList,
  TitleContainer,
  CardTouchable,
  IconTouchable,
  ModalContainer,
  ModalView,
  ButtonContainer,
  TextInput,
  CardContainer,
} from '@pages/QuestionsList/styles'
import Text from '@components/atoms/Text'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Modal, ScrollView } from 'react-native'
import Button from '@components/atoms/Button'
import ModalComponent from '@components/molecules/Modal'
import SelectDropdown from 'react-native-select-dropdown'
import { lightColors } from '@themes/colors'
import { usePsychologyStore } from 'hooks'

const QuestionsList: React.FC<
  PsychologyTabsScreenProps<'QuestionsList'>
> = () => {
  const [visible, setVisible] = React.useState(false)
  const [errorVisible, setErrorVisible] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)
  const [values, setValues] = React.useState({
    firstOption: '',
    secondOption: '',
    thirdOption: '',
    fourthOption: '',
  })
  const [selectItem, setSelectItem] = React.useState('')
  const { psychologyQuestions, setQuestionsPsychology, saveQuestion } =
    usePsychologyStore()

  useFocusEffect(
    React.useCallback(() => {
      console.log('focus')
      setQuestionsPsychology()
    }, [submitted]),
  )

  const handleSubmit = () => {
    console.log('submit')
    //check if first and second options are not empty and show modal
    if (selectItem === 'options' || selectItem === 'checkbox') {
      if (values.firstOption !== '' && values.secondOption !== '') {
        saveQuestion({
          question: value,
          type: selectItem,
          options: [
            values.firstOption,
            values.secondOption,
            values.thirdOption,
            values.fourthOption,
          ],
        })
        setSubmitted(!submitted)
        setSelectItem('')
        setValue('')
        //clean values
        setValues({
          firstOption: '',
          secondOption: '',
          thirdOption: '',
          fourthOption: '',
        })
        setVisible(!visible)
      } else {
        console.log('error')
        setErrorVisible(!errorVisible)
      }
    } else {
      saveQuestion({ question: value, type: selectItem })
      setSubmitted(!submitted)
      setSelectItem('')
      setValue('')
      setVisible(!visible)
    }
  }

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
            <ScrollView style={{ flex: 1, width: '100%' }}>
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
                    //clean values
                    setValues({
                      firstOption: '',
                      secondOption: '',
                      thirdOption: '',
                      fourthOption: '',
                    })
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
                  <TextInput
                    onChangeText={text =>
                      setValues({ ...values, firstOption: text })
                    }
                    value={values.firstOption}
                  />
                  <Text type={'pLarge'}>Segunda opcion (opcional)</Text>
                  <TextInput
                    onChangeText={text =>
                      setValues({ ...values, secondOption: text })
                    }
                    value={values.secondOption}
                  />
                  <Text type={'pLarge'}>Tercera opcion (opcional)</Text>
                  <TextInput
                    onChangeText={text =>
                      setValues({ ...values, thirdOption: text })
                    }
                    value={values.thirdOption}
                  />
                  <Text type={'pLarge'}>Cuarta opcion (opcional)</Text>
                  <TextInput
                    onChangeText={text =>
                      setValues({ ...values, fourthOption: text })
                    }
                    value={values.fourthOption}
                  />
                </>
              )}
              {selectItem === 'checkbox' && (
                <>
                  <Text type={'pLarge'}>Primera opcion</Text>
                  <TextInput
                    onChangeText={text =>
                      setValues({ ...values, firstOption: text })
                    }
                    value={values.firstOption}
                  />
                  <Text type={'pLarge'}>Segunda opcion (opcional)</Text>
                  <TextInput
                    onChangeText={text =>
                      setValues({ ...values, secondOption: text })
                    }
                    value={values.secondOption}
                  />
                  <Text type={'pLarge'}>Tercera opcion (opcional)</Text>
                  <TextInput
                    onChangeText={text =>
                      setValues({ ...values, thirdOption: text })
                    }
                    value={values.thirdOption}
                  />
                  <Text type={'pLarge'}>Cuarta opcion (opcional)</Text>
                  <TextInput
                    onChangeText={text =>
                      setValues({ ...values, fourthOption: text })
                    }
                    value={values.fourthOption}
                  />
                </>
              )}

              <ButtonContainer>
                <Button
                  textType="buttonMedium"
                  size="medium"
                  text="Cancelar"
                  onPress={() => {
                    setVisible(!visible)
                    setSelectItem('')
                    setValues({
                      firstOption: '',
                      secondOption: '',
                      thirdOption: '',
                      fourthOption: '',
                    })
                    setValue('')
                  }}
                />
                <Button
                  textType="buttonMedium"
                  size="medium"
                  text="Guardar"
                  onPress={handleSubmit}
                />
              </ButtonContainer>
            </ScrollView>
          </ModalView>
        </ModalContainer>
      </Modal>
      <ModalComponent
        text="Debes llenar los campos de primera y segunda opcion"
        isVisible={errorVisible}
        onClose={() => setErrorVisible(!errorVisible)}
      />
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
