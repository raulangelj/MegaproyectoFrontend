import Button from '@components/atoms/Button'
import { ReportTabsScreenProps } from '@navigations/types/ScreenProps'
import React, { useEffect, useState } from 'react'
import {
  Container,
  CardContainer,
  ButtonsContainer,
  TitleContainer,
  TextInput,
  Text,
  InputContainer,
  TextContainer,
  ButtonsContainerInside,
  ScrollView,
  SliderContainer,
} from './styles'
import Image from '../../assets/images/reportImage.svg'
import { Question } from '@interfaces/questions'
import { RadialSlider } from 'react-native-radial-slider'
import Voice from '@react-native-voice/voice'
import { TouchableHighlight } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Questions } from '@static/mocks/QuestionsMock'
import { Checkbox, NativeBaseProvider } from 'native-base'

const Report: React.FC<ReportTabsScreenProps<'Report'>> = () => {
  const [counterQuestion, setCounterQuestion] = useState(0)
  const [question, setQuestion] = useState<Question>(Questions[counterQuestion])
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

  const get_date = () => {
    console.log('date')
    let day = new Date().getDate()
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear()

    return day + '/' + month + '/' + year
  }

  useEffect(() => {
    setQuestion(Questions[counterQuestion])
  }, [counterQuestion])

  useEffect(() => {
    setDate(get_date())
  }, [])

  return (
    <NativeBaseProvider>
      <Container>
        <TitleContainer>
          <Image width={100} height={100} />
          <Text>Reporte Diario {date}</Text>
        </TitleContainer>
        <CardContainer>
          <TextContainer>
            <Text>{question?.description}</Text>
          </TextContainer>
          {question?.type === 'input' && (
            <ScrollView showsHorizontalScrollIndicator={false}>
              <TouchableHighlight onPress={startRecognizing}>
                <FontAwesome name="microphone" size={45} color="black" />
              </TouchableHighlight>
              <InputContainer>
                <TextInput onChangeText={setChangeText} />
              </InputContainer>
              <ScrollView style={{ marginBottom: 42 }}>
                {results.map((result, index) => {
                  return (
                    <Text key={`result-${index}`} style={styles.textStyle}>
                      {result}
                    </Text>
                  )
                })}
              </ScrollView>
            </ScrollView>
          )}
          {question?.type === 'options' && (
            <ButtonsContainerInside>
              {question?.options?.map(option => (
                <Button
                  textType="buttonSmall"
                  color="primary"
                  text={option}
                  width={'auto'}
                  size="block"
                  borderRadius={10}
                  onPress={() => {
                    question.answer = option
                    setCounterQuestion((counterQuestion + 1) % Questions.length)
                  }}
                />
              ))}
            </ButtonsContainerInside>
          )}
          {question?.type === 'slider' && (
            <SliderContainer>
              <RadialSlider
                title="Score"
                value={speed}
                min={0}
                max={100}
                onChange={setSpeed}
                unit=" "
                subTitle="Rango"
              />
            </SliderContainer>
          )}

          {question?.type === 'checkbox' && (
            <Checkbox
              isChecked={checked}
              onChange={() => setChecked(!checked)}
              value={''}>
              <Text>I agree</Text>
            </Checkbox>
          )}

          <ButtonsContainer>
            <Button
              textType="buttonLarge"
              color="primary"
              size="block"
              text="Saltar"
              width={'auto'}
              borderRadius={10}
              onPress={() => {
                question.isAnswered = false
                console.log(question.answer)
                console.log(question.isAnswered)
                setCounterQuestion((counterQuestion + 1) % Questions.length)
              }}
            />
          </ButtonsContainer>
        </CardContainer>
      </Container>
    </NativeBaseProvider>
  )
}

export default Report
