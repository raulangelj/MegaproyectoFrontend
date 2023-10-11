/* eslint-disable react-native/no-inline-styles */
import { PsychologyTabsScreenProps } from '@navigations/types/ScreenProps'
import {
  FlatList,
  TitleContainer,
  CardTouchable,
  IconTouchable,
  ModalContainer,
  ModalView,
  TextInput,
  CardContainer,
  EmptyContainer,
  ScrollView1,
} from '@pages/PatientList/styles'
import Text from '@components/atoms/Text'
import React, { useEffect } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { usePsychologyStore } from 'hooks'
import { lightColors } from '@themes/colors'
import ModalComponent from '@components/molecules/Modal'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

const PatientList: React.FC<PsychologyTabsScreenProps<'PatientList'>> = () => {
  const {
    psychologyQuestions,
    setQuestionsPsychology,
    patients,
    setPatients,
    createPatient,
    getQuestionsPatient,
    searchedPatientQuestions,
    deleteQuestion,
    updateQuestion,
    deletePatient,
  } = usePsychologyStore()
  const [visible, setVisible] = React.useState(false)
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
  })
  const [selectedQuestions, setSelectedQuestions] = React.useState([])
  const [submitted, setSubmitted] = React.useState(false)
  const [errorVisible, setErrorVisible] = React.useState(false)
  const [textError, setTextError] = React.useState('')
  const [patientVisible, setPatientVisible] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState({})
  const [deleteIcon, setDeleteIcon] = React.useState(false)
  const [addQuestion, setAddQuestion] = React.useState(false)

  useFocusEffect(
    React.useCallback(() => {
      console.log('Entrando use focus')
      setPatients()
      setQuestionsPsychology()
      getQuestionsPatient(selectedItem._id)
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

  //get id of selected questions
  const getSelectedQuestions = () => {
    const selectedQuestionsIds = selectedQuestions.map(
      (question: any) => psychologyQuestions[question]._id,
    )
    return selectedQuestionsIds
  }

  const handleSubmit = async () => {
    try {
      console.log('submit creating patient')
      //validate email format
      const emailRegex = /\S+@\S+\.\S+/
      if (!emailRegex.test(values.email)) {
        setErrorVisible(!errorVisible)
        setTextError('Correo invalido')
      }
      //validate password length
      else if (values.password.length < 6) {
        setErrorVisible(!errorVisible)
        setTextError('La contraseña debe tener al menos 6 caracteres')
      } else {
        await createPatient({
          assignedQuestions: getSelectedQuestions(),
          category: 'paciente',
          password: values.password,
          email: values.email,
          name: values.name,
        })
        // Handle the rest of your logic after the asynchronous operation
        setSubmitted(!submitted)
        // Clean values
        setValues({
          name: '',
          email: '',
          password: '',
        })
        setSelectedQuestions([])
        setVisible(!visible)
      }
    } catch (error) {
      // Handle any errors that occur during the asynchronous operation
      console.error('Error:', error)
    }
  }
  const isSelected = (index: any) => selectedQuestions.includes(index)

  //When patient is selected
  const handleCardPress = async (item: any) => {
    setSelectedItem(item)
    await getQuestionsPatient(item._id)
    setPatientVisible(!patientVisible)
  }

  const handleDeleteQuestion = async () => {
    try {
      //for every selected quesstion
      for (let i = 0; i < selectedQuestions.length; i++) {
        //delete question
        console.log(
          selectedItem._id,
          selectedQuestions[i],
          searchedPatientQuestions[selectedQuestions[i]]._id,
        )
        await deleteQuestion({
          idPatient: selectedItem._id,
          idQuestion: searchedPatientQuestions[selectedQuestions[i]]._id,
        })
      }
      //refresh questions
      setSelectedQuestions([])
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleDeletePatient = async () => {
    console.log('ye;,', selectedItem._id, selectedItem, selectedQuestions)
    try {
      for (let i = 0; i < selectedQuestions.length; i++) {
        //delete question

        await deletePatient({
          id: selectedQuestions[i]._id,
        })
      }
      setSubmitted(!submitted)
      setSelectedQuestions([])
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleAddQuestion = async () => {
    console.log('update / add question to patient')
    console.log('selected questions', selectedQuestions)
    //send array
    await updateQuestion({
      idPatient: selectedItem._id,
      idQuestion: getSelectedQuestions(),
    })
    console.log('after update petition')
    setSubmitted(!submitted)
    //clean
    setSelectedQuestions([])
    setAddQuestion(!addQuestion)
  }

  const handleBack = () => {
    setPatientVisible(!patientVisible)
    setSelectedQuestions([])
  }

  if (patients.length === 0) {
    return (
      <>
        <Modal
          visible={visible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            setVisible(!visible)
          }}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
              <Text type={'h1'}>Creacion de paciente</Text>
              <ScrollView1 contentContainerStyle={{ padding: 20 }}>
                <Text type={'h1'}>Nombre:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  value={values.name}
                  onChangeText={text => setValues({ ...values, name: text })}
                  autoFocus={true}
                />
                <Text type={'h1'}>Correo:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  value={values.email}
                  onChangeText={text => setValues({ ...values, email: text })}
                  autoFocus={true}
                />
                <Text type={'h1'}>Contraseña:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  value={values.password}
                  onChangeText={text =>
                    setValues({ ...values, password: text })
                  }
                  autoFocus={true}
                  secureTextEntry={true}
                />
                <Text type={'h1'}>Preguntas disponibles</Text>
                {/*render questions map*/}
                {psychologyQuestions.map((question, index) => (
                  <TouchableWithoutFeedback
                    key={index}
                    onLongPress={() => toggleQuestionSelection(index)}>
                    <CardContainer
                      style={{
                        backgroundColor: isSelected(index)
                          ? lightColors.quinary
                          : lightColors.primary,
                      }}>
                      <Text type={'h1'}>{question.question}</Text>
                      <Text type={'h1'}>Tipo: {question.type}</Text>
                    </CardContainer>
                  </TouchableWithoutFeedback>
                ))}

                {/* Additional input fields or content within the ScrollView */}
              </ScrollView1>
              <Button
                title="Guardar"
                onPress={() => {
                  handleSubmit()
                }}
                color={lightColors.quaternary}
              />
              <Button
                title="Cancelar"
                onPress={() => {
                  //clean values
                  setValues({
                    name: '',
                    email: '',
                    password: '',
                  })
                  setSelectedQuestions([])
                  setVisible(!visible)
                }}
                color={lightColors.quaternary}
              />
            </View>
          </KeyboardAvoidingView>
        </Modal>
        <TitleContainer>
          <Text type="pLarge" color="quaternary">
            Lista de pacientes
          </Text>
          <IconTouchable
            onPress={() => {
              setVisible(!visible)
            }}>
            <Feather name="user-plus" size={20} color="black" />
          </IconTouchable>
        </TitleContainer>
        <EmptyContainer>
          <Text type={'h1'}>Aun no hay pacientes disponibles</Text>
        </EmptyContainer>
      </>
    )
  }

  return (
    <>
      {patientVisible && (
        <Modal
          visible={patientVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            setPatientVisible(!patientVisible)
            setSelectedQuestions([])
          }}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{ flex: 1, backgroundColor: lightColors.primary }}>
              <ScrollView1 contentContainerStyle={{ padding: 0 }}>
                <ImageBackground
                  source={require('../../assets/images/wickedbackground(1).png')}
                  style={{ flex: 1, width: '100%', alignItems: 'center' }}
                  imageStyle={{
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                  }}>
                  <View
                    style={{ flex: 1, alignItems: 'center', paddingTop: 10 }}>
                    <FontAwesome
                      name="user-circle"
                      size={60}
                      color={lightColors.white}
                    />
                    <Text type="d3" color="white">
                      {selectedItem?.name}
                    </Text>
                    <Text type="pMediumBold" color="white">
                      {selectedItem?.email}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      {deleteIcon && (
                        <IconTouchable
                          onPress={() => {
                            handleDeleteQuestion()
                          }}>
                          <MaterialCommunityIcons
                            name="delete"
                            size={30}
                            color={lightColors.senary}
                          />
                        </IconTouchable>
                      )}
                      <IconTouchable
                        onPress={() => {
                          setAddQuestion(!addQuestion)
                        }}>
                        <Ionicons
                          name="add-circle"
                          size={30}
                          color={lightColors.senary}
                        />
                      </IconTouchable>
                    </View>
                  </View>
                </ImageBackground>
                <Text type="h2">Preguntas asignadas</Text>
                <View style={{ alignItems: 'center' }}>
                  {searchedPatientQuestions.map((question, index) => (
                    <TouchableWithoutFeedback
                      key={index}
                      onLongPress={() => toggleQuestionSelection(index)}>
                      <CardContainer
                        key={index}
                        style={{
                          backgroundColor: isSelected(index)
                            ? lightColors.quinary
                            : lightColors.secondary,
                        }}>
                        <Text type="pLargeBold" color="white">
                          {question.question}
                        </Text>
                        <Text type="pMediumBold" color="white">
                          Tipo: {question.type}
                        </Text>
                      </CardContainer>
                    </TouchableWithoutFeedback>
                  ))}
                </View>
              </ScrollView1>
              <Button
                title="Regresar"
                onPress={() => {
                  handleBack()
                }}
                color={lightColors.quaternary}
              />
            </View>
          </KeyboardAvoidingView>
        </Modal>
      )}

      <Modal
        visible={addQuestion}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setAddQuestion(!addQuestion)
          setSelectedQuestions([])
        }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 0, flexDirection: 'row', padding: 10 }}>
              <Text type={'h1'}>Agregar pregunta a paciente</Text>
            </View>

            <ScrollView1 contentContainerStyle={{ padding: 20 }}>
              <Text type={'h2'}>Selecciona las preguntas para el paciente</Text>
              {/*Obtener pregutnas del psicologo*/}
              {/*render questions map*/}
              {psychologyQuestions.map((question, index) => (
                <TouchableWithoutFeedback
                  key={index}
                  onLongPress={() => toggleQuestionSelection(index)}>
                  <CardContainer
                    key={index}
                    style={{
                      backgroundColor: isSelected(index)
                        ? lightColors.quinary
                        : lightColors.primary,
                    }}>
                    <Text type={'h1'}>{question.question}</Text>
                    <Text type={'h1'}>Tipo: {question.type}</Text>
                  </CardContainer>
                </TouchableWithoutFeedback>
              ))}
            </ScrollView1>
            <Button
              title="Agregar"
              onPress={() => {
                handleAddQuestion()
              }}
              color={lightColors.quaternary}
            />
            <Button
              title="Cancelar"
              onPress={() => {
                //clean values
                setAddQuestion(!addQuestion)
              }}
              color={lightColors.quaternary}
            />
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setVisible(!visible)
        }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text type={'h1'}>Creacion de paciente</Text>
            <ScrollView1 contentContainerStyle={{ padding: 20 }}>
              <Text type={'h1'}>Nombre:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={values.name}
                onChangeText={text => setValues({ ...values, name: text })}
                autoFocus={true}
              />
              <Text type={'h1'}>Correo:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={values.email}
                onChangeText={text => setValues({ ...values, email: text })}
                autoFocus={true}
              />
              <Text type={'h1'}>Contraseña:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={values.password}
                onChangeText={text => setValues({ ...values, password: text })}
                autoFocus={true}
                secureTextEntry={true}
              />
              <Text type={'h1'}>Preguntas disponibles</Text>
              {/*render questions map*/}
              {psychologyQuestions.map((question, index) => (
                <TouchableWithoutFeedback
                  key={index}
                  onLongPress={() => toggleQuestionSelection(index)}>
                  <CardContainer
                    style={{
                      backgroundColor: isSelected(index)
                        ? lightColors.quinary
                        : lightColors.primary,
                    }}>
                    <Text type={'h1'}>{question.question}</Text>
                    <Text type={'h1'}>Tipo: {question.type}</Text>
                  </CardContainer>
                </TouchableWithoutFeedback>
              ))}

              {/* Additional input fields or content within the ScrollView */}
            </ScrollView1>
            <Button
              title="Guardar"
              onPress={() => {
                handleSubmit()
              }}
              color={lightColors.quaternary}
            />
            <Button
              title="Cancelar"
              onPress={() => {
                //clean values
                setValues({
                  name: '',
                  email: '',
                  password: '',
                })
                setSelectedQuestions([])
                setVisible(!visible)
              }}
              color={lightColors.quaternary}
            />
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <ModalComponent
        text={textError}
        isVisible={errorVisible}
        onClose={() => setErrorVisible(!errorVisible)}
      />
      <TitleContainer>
        <Text type="pLarge" color="quaternary">
          Lista de pacientes
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <IconTouchable
            onPress={() => {
              setVisible(!visible)
            }}>
            <Feather name="user-plus" size={20} color="black" />
          </IconTouchable>
          {deleteIcon && (
            <IconTouchable
              onPress={() => {
                console.log('delete patient')
                handleDeletePatient()
              }}>
              <MaterialCommunityIcons name="delete" size={20} color="black" />
            </IconTouchable>
          )}
        </View>
      </TitleContainer>

      <FlatList
        data={patients}
        renderItem={({ item }: { item: any }) => (
          <CardTouchable
            onPress={() => {
              if (!deleteIcon) {
                handleCardPress(item)
              }
            }}
            onLongPress={() => toggleQuestionSelection(item)}
            style={{
              backgroundColor: isSelected(item)
                ? lightColors.secondary
                : lightColors.quinary,
            }}>
            <FontAwesome name="user-circle" size={30} color="white" />

            <Text type="pLargeBold" color="background0">
              {item.name}
            </Text>
            <Text type="pMedium" color="background0">
              {item.email}
            </Text>
          </CardTouchable>
        )}
      />
    </>
  )
}

export default PatientList
