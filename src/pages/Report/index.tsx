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
  KeyBoardAvoidingView,
  ScrollView,
} from './styles'
import Image from '../../assets/images/reportImage.svg'
import { Question } from '@interfaces/questions'

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

  const [questions, setQuestions] = useState<Question[]>([
    Question1,
    Question2,
    Question3,
  ])
  const [counterQuestion, setCounterQuestion] = useState(0)
  const [question, setQuestion] = useState<Question>(questions[counterQuestion])
  const [text, setChangeText] = useState('')

  useEffect(() => {
    setQuestion(questions[counterQuestion])
  }, [counterQuestion])

  return (
    <Container>
      <TitleContainer>
        <Image width={100} height={100} />
        <Text>Reporte Diario</Text>
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
