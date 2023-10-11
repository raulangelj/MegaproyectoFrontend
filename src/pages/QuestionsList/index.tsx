/* eslint-disable react-native/no-inline-styles */
import { PsychologyTabsScreenProps } from '@navigations/types/ScreenProps'
import {
  FlatList,
  TitleContainer,
  CardTouchable,
  IconTouchable,
  ButtonContainer,
  TextInput,
  CardContainer,
} from '@pages/QuestionsList/styles'
import Text from '@components/atoms/Text'
import React, { useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  View,
} from 'react-native'
import Button from '@components/atoms/Button'
import ModalComponent from '@components/molecules/Modal'
import SelectDropdown from 'react-native-select-dropdown'
import { lightColors } from '@themes/colors'
import { usePsychologyStore } from 'hooks'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
  const [selectedQuestion, setSelectedQuestion] = React.useState({})
  const [questionVisible, setQuestionVisible] = React.useState(false)
  const [selectItem, setSelectItem] = React.useState('')
  const [editTitle, setEditTitle] = React.useState(false)
  const [editType, setEditType] = React.useState(false)
  const {
    psychologyQuestions,
    setQuestionsPsychology,
    saveQuestion,
    updateQuestionInfo,
    deleteGeneralQuestion,
  } = usePsychologyStore()
  const [selectedQuestions, setSelectedQuestions] = React.useState([])
  const [deleteIcon, setDeleteIcon] = React.useState(false)

  useFocusEffect(
    React.useCallback(() => {
      console.log('focus')
      setQuestionsPsychology()
    }, [submitted]),
  )

  const toggleQuestionSelection = (index: any) => {
    if (isSelected(index)) {
      // If the question is already selected, deselect it
      setSelectedQuestions(selectedQuestions.filter(i => i !== index))
    } else {
      // If the question is not selected, select it
      setSelectedQuestions([...selectedQuestions, index])
    }
  }

  useEffect(() => {
    console.log('selected questions useEffect', selectedQuestions)

    if (selectedQuestions.length > 0) {
      setDeleteIcon(true)
    } else {
      setDeleteIcon(false)
    }
  }, [selectedQuestions])

  const handleSubmit = async () => {
    console.log('submit')
    //check if first and second options are not empty and show modal
    if (selectItem === 'options' || selectItem === 'checkbox') {
      if (values.firstOption !== '' && values.secondOption !== '') {
        await saveQuestion({
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
      await saveQuestion({ question: value, type: selectItem })
      setSubmitted(!submitted)
      setSelectItem('')
      setValue('')
      setVisible(!visible)
    }
  }

  const handleUpdate = async () => {
    console.log('updating question')
    console.log(selectedQuestion)
    console.log(value)
    console.log(selectItem)
    if (selectItem === 'options' || selectItem === 'checkbox') {
      if (values.firstOption !== '' && values.secondOption !== '') {
        await updateQuestionInfo({
          idQuestion: selectedQuestion._id,
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
        setQuestionVisible(!questionVisible)
      } else {
        console.log('error')
        setErrorVisible(!errorVisible)
      }
    } else {
      await updateQuestionInfo({
        idQuestion: selectedQuestion._id,
        question: value,
        type: selectItem,
      })
      setSubmitted(!submitted)
      setSelectItem('')
      setValue('')
      setQuestionVisible(!questionVisible)
    }
  }

  const handleQuestionCard = (question: any) => {
    console.log(question)
    setSelectedQuestion(question)
    setQuestionVisible(!questionVisible)
  }
  if (psychologyQuestions.length === 0) {
    return (
      <>
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            setVisible(!visible)
          }}
          visible={visible}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{ flex: 0, height: '100%', backgroundColor: 'white' }}>
              <Text type={'h1'}>Crear pregunta</Text>
              <ScrollView
                contentContainerStyle={{ alignItems: 'center', padding: 20 }}>
                <CardContainer>
                  <Text type={'pLarge'}>Escribe la pregunta</Text>
                  <TextInput onChangeText={setValue} value={value} />
                  <Text type={'pLarge'}>Tipo de pregunta</Text>
                  <SelectDropdown
                    data={['Escritura', 'Checkbox', 'Opciones', 'Slider']}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index)
                      //transform selectedItem to valid options
                      if (selectedItem === 'Escritura') {
                        setSelectItem('input')
                      }
                      if (selectedItem === 'Checkbox') {
                        setSelectItem('checkbox')
                      }
                      if (selectedItem === 'Opciones') {
                        setSelectItem('options')
                      }
                      if (selectedItem === 'Slider') {
                        setSelectItem('slider')
                      }
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
                    defaultButtonText="Opciones"
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
                    <Text type={'pLarge'}>Segunda opcion</Text>
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
                    <Text type={'pLarge'}>Segunda opcion</Text>
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
              </ScrollView>
              <ButtonContainer>
                <Button
                  textType="buttonMedium"
                  size="large"
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
                  size="large"
                  text="Guardar"
                  onPress={handleSubmit}
                />
              </ButtonContainer>
            </View>
          </KeyboardAvoidingView>
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
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: lightColors.primary,
          }}>
          <Text type={'h1'}>Aun no hay preguntas reflexivas</Text>
        </View>
      </>
    )
  }

  const isSelected = (index: any) => selectedQuestions.includes(index)

  const handleDeleteGeneralQuestion = async () => {
    console.log('here', selectedQuestions, selectItem)
    for (const item of selectedQuestions) {
      await deleteGeneralQuestion({ id: item._id })
    }
    setSubmitted(!submitted)
    setSelectedQuestions([])
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
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{ flex: 0, height: '100%', backgroundColor: 'white' }}>
            <Text type={'h1'}>Crear pregunta</Text>
            <ScrollView
              contentContainerStyle={{ alignItems: 'center', padding: 20 }}>
              <CardContainer>
                <Text type={'pLarge'}>Escribe la pregunta</Text>
                <TextInput onChangeText={setValue} value={value} />
                <Text type={'pLarge'}>Tipo de pregunta</Text>
                <SelectDropdown
                  data={['Escritura', 'Checkbox', 'Opciones', 'Slider']}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                    //transform selectedItem to valid options
                    if (selectedItem === 'Escritura') {
                      setSelectItem('input')
                    }
                    if (selectedItem === 'Checkbox') {
                      setSelectItem('checkbox')
                    }
                    if (selectedItem === 'Opciones') {
                      setSelectItem('options')
                    }
                    if (selectedItem === 'Slider') {
                      setSelectItem('slider')
                    }
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
                  defaultButtonText="Opciones"
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
                  <Text type={'pLarge'}>Segunda opcion</Text>
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
                  <Text type={'pLarge'}>Segunda opcion</Text>
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
            </ScrollView>
            <ButtonContainer>
              <Button
                textType="buttonMedium"
                size="large"
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
                size="large"
                text="Guardar"
                onPress={handleSubmit}
              />
            </ButtonContainer>
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setQuestionVisible(!questionVisible)
        }}
        visible={questionVisible}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{ flex: 0, height: '100%', backgroundColor: 'white' }}>
            <Text type={'h1'}>Editar pregunta</Text>
            <ScrollView
              contentContainerStyle={{ alignItems: 'center', padding: 20 }}>
              <Text type={'pLarge'}>Pregunta</Text>
              <Text type={'pLarge'}>{selectedQuestion.question}</Text>
              <Text type={'pLarge'}>Tipo de pregunta</Text>
              <Text type={'pLarge'}>{selectedQuestion.type}</Text>
              <Button
                textType="buttonMedium"
                size="large"
                text="Editar titulo"
                onPress={() => {
                  setEditTitle(!editTitle)
                }}
              />
              {editTitle && (
                <>
                  <Text type={'pLarge'}>Escribe la pregunta</Text>
                  <TextInput onChangeText={setValue} value={value} />
                </>
              )}
              <Button
                textType="buttonMedium"
                size="large"
                text="Editar tipo"
                onPress={() => {
                  setEditType(!editType)
                }}
              />
              {editType && (
                <SelectDropdown
                  data={['Escritura', 'Checkbox', 'Opciones', 'Slider']}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                    //transform selectedItem to valid options
                    if (selectedItem === 'Escritura') {
                      setSelectItem('input')
                    }
                    if (selectedItem === 'Checkbox') {
                      setSelectItem('checkbox')
                    }
                    if (selectedItem === 'Opciones') {
                      setSelectItem('options')
                    }
                    if (selectedItem === 'Slider') {
                      setSelectItem('slider')
                    }
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
                  defaultButtonText="Opciones"
                />
              )}
              {selectItem === 'options' && (
                <>
                  <Text type={'pLarge'}>Primera opcion</Text>
                  <TextInput
                    onChangeText={text =>
                      setValues({ ...values, firstOption: text })
                    }
                    value={values.firstOption}
                  />
                  <Text type={'pLarge'}>Segunda opcion</Text>
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
                  <Text type={'pLarge'}>Segunda opcion</Text>
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
            </ScrollView>
            <ButtonContainer>
              <Button
                textType="buttonMedium"
                size="large"
                text="Cancelar"
                onPress={() => {
                  setQuestionVisible(!questionVisible)
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
                size="large"
                text="Guardar"
                onPress={handleUpdate}
              />
            </ButtonContainer>
          </View>
        </KeyboardAvoidingView>
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
        {deleteIcon && (
          <IconTouchable
            onPress={() => {
              console.log('delete patient')
              handleDeleteGeneralQuestion()
            }}>
            <MaterialCommunityIcons name="delete" size={20} color="black" />
          </IconTouchable>
        )}
      </TitleContainer>
      <FlatList
        data={psychologyQuestions}
        renderItem={({ item }: { item: any }) => (
          <CardTouchable
            onPress={() => {
              if (!deleteIcon) {
                handleQuestionCard(item)
              }
            }}
            onLongPress={() => toggleQuestionSelection(item)}
            style={{
              backgroundColor: isSelected(item)
                ? lightColors.quinary
                : lightColors.background0,
            }}>
            <Text type="pLarge">{item.question}</Text>
            <Text type="pLarge">Tipo: {item.type}</Text>
          </CardTouchable>
        )}
      />
    </>
  )
}

export default QuestionsList
