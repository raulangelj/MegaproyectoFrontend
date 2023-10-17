import Button from '@components/atoms/Button'
import { ReportTabsScreenProps } from '@navigations/types/ScreenProps'
import React, { useEffect, useState } from 'react'
import {
  Container,
  CardContainer,
  ButtonsContainer,
  TitleContainer,
  TextInput,
  TextContainer,
  ButtonsContainerInside,
  ScrollView,
  SliderContainer,
  SkipPressable,
  MicPressable,
  ModalView,
  ModalContainer,
} from './styles'
import { lightColors } from '@themes/colors'
import Text from '@components/atoms/Text'
import Image from '../../assets/images/reportImage.svg'
import Relax from '../../assets/images/relax.svg'
import { Question } from '@interfaces/questions'
import { RadialSlider } from 'react-native-radial-slider'
import Voice from '@react-native-voice/voice'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { CheckBox, LinearProgress } from '@rneui/themed'
import { KeyboardAvoidingView, Modal } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { usePatientStore } from 'hooks'
import { useFocusEffect } from '@react-navigation/native'

const Report: React.FC<ReportTabsScreenProps<'Report'>> = ({ navigation }) => {
  const [counterQuestion, setCounterQuestion] = useState(0)
  const [text, setChangeText] = useState('')
  const [speed, setSpeed] = useState(0)
  const [date, setDate] = useState('')
  const [pitch, setPitch] = useState('')
  const [error, setError] = useState('')
  const [end, setEnd] = useState('')
  const [started, setStarted] = useState('')
  const [results, setResults] = useState([])
  const [partialResults, setPartialResults] = useState([])
  const [checked, setChecked] = useState(false)
  const [groupValues, setGroupValues] = useState([])
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const [answers, setAnswers] = useState<any[]>([])
  const { setQuestions, questions, saveAnswer } = usePatientStore()

  //reset counter
  useFocusEffect(
    React.useCallback(() => {
      setCounterQuestion(0)
    }, []),
  )

  //call to api to get questions
  useEffect(() => {
    console.log('calling to questions')
    setQuestions()
    setCounterQuestion(0)
  }, [])
  //console.log('IM HERE2')
  //console.log('QUESTIONS ', Questions2)
  //console.log('FIRST QUESTION ', Questions2[counterQuestion])
  //console.log('COUNTER', counterQuestion)
  const [question, setQuestion] = useState<Question>(questions[counterQuestion])

  useEffect(() => {
    setQuestion(questions[counterQuestion])
  }, [questions])

  useEffect(() => {
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart
    Voice.onSpeechEnd = onSpeechEnd
    Voice.onSpeechError = onSpeechError
    Voice.onSpeechResults = onSpeechResults
    Voice.onSpeechPartialResults = onSpeechPartialResults
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const onSpeechStart = e => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e)
    setStarted('√')
  }

  const onSpeechEnd = e => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEnd: ', e)
    setEnd('√')
  }

  const onSpeechError = e => {
    //Invoked when an error occurs.
    console.log('onSpeechError: ', e)
    setError(JSON.stringify(e.error))
  }

  const onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e)
    setResults(e.value)
    setChangeText(e.value[0])
  }

  const onSpeechPartialResults = e => {
    //Invoked when any results are computed
    console.log('onSpeechPartialResults: ', e)
    setPartialResults(e.value)
  }

  const onSpeechVolumeChanged = e => {
    //Invoked when pitch that is recognized changed
    console.log('onSpeechVolumeChanged: ', e)
    setPitch(e.value)
  }

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      await Voice.start('es-GT')
      setPitch('')
      setError('')
      setStarted('')
      setResults([])
      setPartialResults([])
      setEnd('')
    } catch (e) {
      console.error(e)
    }
  }

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop()
    } catch (e) {
      console.error(e)
    }
  }

  const cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel()
    } catch (e) {
      console.error(e)
    }
  }

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy()
      setPitch('')
      setError('')
      setStarted('')
      setResults([])
      setPartialResults([])
      setEnd('')
    } catch (e) {
      console.error(e)
    }
  }

  const changeStatusofRecord = () => {
    if (started === '') {
      startRecognizing()
    } else {
      setStarted('')
      stopRecognizing()
    }
  }

  const get_date = () => {
    console.log('date')
    let day = new Date().getDate()
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear()

    return day + '/' + month + '/' + year
  }

  useEffect(() => {
    console.log('ENTERING EFFECT COUNTER', counterQuestion)
    setQuestion(questions[counterQuestion])
    //change the bar progress between 0 and 1
    setProgress(counterQuestion / questions.length)
  }, [counterQuestion])

  useEffect(() => {
    setDate(get_date())
  }, [])

  //useEffect of answers
  // useEffect(() => {
  //   console.log('ANSWERS EFFECT', answers)
  // }, [answers])

  const handlePress = () => {
    console.log('HANDLE PRESS')
    if (question?.type === 'options') {
      // Create a new array with the updated answer
      const updatedAnswers = [
        ...answers,
        {
          question: question?.question,
          answer: [''],
        },
      ]

      setAnswers(updatedAnswers)
    }
    //check options of checkbox
    if (question?.type === 'checkbox') {
      question?.checkBoxOptions?.map(option => {
        if (state.selections.includes(option)) {
          option.checked = true
        } else {
          option.checked = false
        }
      })
      //add to answers
      console.log(state.selections)
      //array to save the titles of selections
      let titles: any[] = []
      state.selections.map(selection => {
        titles.push(selection.title)
      })
      setAnswers([
        ...answers,
        {
          question: question?.question,
          answer: titles,
        },
      ])
    }
    //clean input value
    if (question?.type === 'input') {
      //add to answers
      setAnswers([
        ...answers,
        {
          question: question?.question,
          answer: [text],
        },
      ])

      setChangeText('')
    }
    if (question?.type === 'slider') {
      //console.log('SPEED', speed)
      //add to answers
      setAnswers([
        ...answers,
        {
          question: question?.question,
          answer: [speed],
        },
      ])
      setSpeed(0)
    }
  }
  useEffect(() => {
    //console.log('USE EFFECT ANSWER', counterQuestion)
    const saveAndNavigate = async () => {
      console.log(counterQuestion, questions.length)
      if (counterQuestion === questions.length - 1) {
        // Save the answers
        console.log('ANSWER TO BE SAVED', answers)
        if (counterQuestion >= 0 && answers.length !== 0) {
          await saveAnswer({ answersData: answers })
          setCounterQuestion(0)

          // Navigate to the next screen
          navigation.navigate('MainReport')
        }
      } else if (questions.length > 0 && answers.length > 0) {
        console.log('estoy aqui')
        setCounterQuestion((counterQuestion + 1) % questions.length)
      }
    }

    saveAndNavigate()
  }, [answers, navigation])

  //handle state of checkboxes dynamically
  const [state, setState] = useState<{ selections: string[] }>({
    selections: [],
  })

  function handleCheckboxChange(key: string) {
    let sel = state.selections
    let find = sel.indexOf(key)
    if (find > -1) {
      sel.splice(find, 1)
    } else {
      sel.push(key)
    }

    setState({
      selections: sel,
    })
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setVisible(!visible)
        }}
        visible={visible}>
        <ModalContainer>
          <ModalView>
            <Text type="h1" color="background3" style={{ textAlign: 'center' }}>
              Toma un descanso
            </Text>
            <CountdownCircleTimer
              isPlaying
              duration={10}
              colors={'#004777'}
              onComplete={() => {
                setVisible(!visible)
              }}>
              {({ remainingTime }) => (
                <>
                  <Relax width={100} height={100} />
                  <Text type="pLarge">{remainingTime}</Text>
                </>
              )}
            </CountdownCircleTimer>
          </ModalView>
        </ModalContainer>
      </Modal>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <TitleContainer>
          <Image width={100} height={100} />
          <Text type="pLarge" color="quaternary">
            Reporte Diario {date}
          </Text>
          <LinearProgress
            color={lightColors.quinary}
            animation={{ duration: 1000 }}
            style={{ width: '80%', height: 10 }}
            value={progress}
            variant="determinate"
          />
        </TitleContainer>

        <CardContainer>
          {question?.type === 'input' && (
            <Container>
              <TextContainer>
                <Text
                  type="h1"
                  color="background3"
                  style={{ textAlign: 'center' }}>
                  {question?.question}
                </Text>
              </TextContainer>
              <TextInput onChangeText={setChangeText} value={text} />
              <MicPressable onPress={changeStatusofRecord}>
                <FontAwesome name="microphone" size={40} color="white" />
              </MicPressable>
            </Container>
          )}
          {question?.type === 'options' && (
            <ButtonsContainerInside>
              <TextContainer>
                <Text type="h1" color="background3">
                  {question?.question}
                </Text>
              </TextContainer>
              {question?.options?.map(option => (
                <Button
                  key={option}
                  textType="buttonSmall"
                  color="tertiary"
                  text={option}
                  width={'auto'}
                  size="block"
                  borderRadius={10}
                  onPress={() => {
                    setState({ selections: [] })
                    //save answer
                    setAnswers([
                      ...answers,
                      {
                        question: question?.question,
                        answer: [option],
                      },
                    ])
                  }}
                />
              ))}
            </ButtonsContainerInside>
          )}
          {question?.type === 'slider' && (
            <SliderContainer>
              <TextContainer>
                <Text
                  type="h1"
                  color="background3"
                  style={{ textAlign: 'center' }}>
                  {question?.question}
                </Text>
              </TextContainer>
              <RadialSlider
                value={speed}
                min={0}
                max={100}
                onChange={value => setSpeed(value)}
                unit=" "
                subTitle="Calificacion"
                sliderWidth={10}
                leftIconStyle={{ display: 'none' }}
                rightIconStyle={{ display: 'none' }}
                thumbColor={lightColors.quinary}
                subTitleStyle={{ color: lightColors.quinary }}
                valueStyle={{ color: lightColors.quinary }}
                linearGradient={[
                  {
                    offset: '0%',
                    color: lightColors.quinary,
                  },
                ]}
              />
            </SliderContainer>
          )}

          {question?.type === 'checkbox' && (
            <ButtonsContainerInside>
              <TextContainer>
                <Text
                  type="h1"
                  color="background3"
                  style={{ textAlign: 'center' }}>
                  {question?.question}
                </Text>
              </TextContainer>
              {question?.checkBoxOptions?.map((option, index) => (
                <CheckBox
                  textStyle={{
                    fontSize: 15,
                  }}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  checkedColor={lightColors.quinary}
                  uncheckedIcon="checkbox-blank-outline"
                  title={option.title}
                  key={index}
                  checked={state.selections.includes(option)}
                  onPress={() => {
                    handleCheckboxChange(option)
                    console.log(option)
                  }}
                />
              ))}
            </ButtonsContainerInside>
          )}
        </CardContainer>
        <ButtonsContainer>
          <SkipPressable
            onPress={() => {
              setVisible(true)
            }}>
            <FontAwesome name="coffee" size={30} color="white" />
          </SkipPressable>
          <SkipPressable
            onPress={() => {
              handlePress()
              question.isAnswered = true
              //clean the array
              setState({ selections: [] })
              // console.log(Questions2.length, counterQuestion)
              //if is the last question navigate to MainReport

              // if (counterQuestion === Questions2.length - 1) {
              //   console.log('LAST QUESTION')
              //   //save the answers
              //   console.log('WATCHING ANSWERS SKIP', answers)
              //   //saveAnswer()
              //   navigation.navigate('MainReport')
              // }
              //print answers
              // console.log('ANSWERS', answers)
            }}>
            <AntDesign name="right" size={30} color="white" />
          </SkipPressable>
        </ButtonsContainer>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Report
