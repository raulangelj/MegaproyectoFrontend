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

const Report: React.FC<ReportTabsScreenProps<'Report'>> = () => {
  const Question1: Question = {
    id: 1,
    description: '¿Como te sientes hoy?',
    title: 'Nombre',
    answer: '',
    isAnswered: true,
    type: 'options',
    options: ['kike', 'jose', 'juan'],
  }

  const Question2: Question = {
    id: 2,
    description: '¿Que fue lo mas divertido que te paso hoy?',
    title: 'Nombre',
    answer: '',
    isAnswered: true,
    type: 'input',
    options: ['kike', 'jose', 'juan'],
  }

  const Question3: Question = {
    id: 3,
    description: '¿Cuentame tus planes para mañana?',
    title: 'Nombre',
    answer: '',
    isAnswered: true,
    type: 'input',
    options: ['kike', 'jose', 'juan'],
  }

  const Question4: Question = {
    id: 4,
    description: '¿Que tanto disfrutaste tu dia?',
    title: 'Nombre',
    answer: '',
    isAnswered: true,
    type: 'slider',
    options: ['kike'],
  }

  let questions = [Question1, Question2, Question3, Question4]
  const [counterQuestion, setCounterQuestion] = useState(0)
  const [question, setQuestion] = useState<Question>(questions[counterQuestion])
  const [text, setChangeText] = useState('')
  const [speed, setSpeed] = useState(0)
  const [date, setDate] = useState('')

  const get_date = () => {
    console.log('date')
    let day = new Date().getDate()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()

    return day + '/' + month + '/' + year
  }

  useEffect(() => {
    setQuestion(questions[counterQuestion])
  }, [counterQuestion])

  useEffect(() => {
    setDate(get_date())
  }, [])

  return (
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
            <InputContainer>
              <TextInput onChangeText={setChangeText} />
            </InputContainer>
          </ScrollView>
        )}
        {question?.type === 'options' && (
          <ButtonsContainerInside>
            <Button type={'buttonColor0'} borderRadius={10} text={'Feliz'} />
            <Button type={'buttonColor0'} borderRadius={10} text={'Triste'} />
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

        <ButtonsContainer>
          <Button
            type="buttonColor0"
            text="Saltar"
            width={'auto'}
            borderRadius={10}
            onPress={() => {
              setCounterQuestion((counterQuestion + 1) % questions.length)
            }}
          />
          <Button
            type="buttonColor0"
            text="Siguiente"
            width={'auto'}
            borderRadius={10}
            onPress={() => {
              setCounterQuestion((counterQuestion + 1) % questions.length) //CHANGE
            }}
          />
        </ButtonsContainer>
      </CardContainer>
    </Container>
  )
}

export default Report
