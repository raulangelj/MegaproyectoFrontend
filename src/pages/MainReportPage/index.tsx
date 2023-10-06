import { ReportTabsScreenProps } from '@navigations/types/ScreenProps'
import Image from '../../assets/images/reportMain.svg'
import { Container } from './styles'
import React, { useEffect } from 'react'
import Button from '@components/atoms/Button'
import ModalComponent from '@components/molecules/Modal'
import { usePatientStore } from 'hooks'
import { useUserStore } from 'hooks'
import { useFocusEffect } from '@react-navigation/native'

const MainReport: React.FC<ReportTabsScreenProps<'MainReport'>> = ({
  navigation,
}) => {
  const { getAnswers, answers, sortAnswers, setQuestions, questions } =
    usePatientStore()
  const { user } = useUserStore()
  const [valid, setValid] = React.useState(false)
  const [nav, setNav] = React.useState(false)
  const [empty, setEmpty] = React.useState(false)
  const [flag, setFlag] = React.useState(true)

  useFocusEffect(
    React.useCallback(() => {
      getAnswers()
      setQuestions()
    }, []),
  )

  const CheckDay = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    console.log(day, month, year, user.uid)
    //check today and id of user
    const todayAnswers = answers.filter(
      answer =>
        answer.dateDay === day &&
        answer.dateMonth === month &&
        answer.dateYear === year &&
        answer.idPatient === user?.uid,
    )

    console.log('questions user ', questions)
    if (questions.length === 0) {
      console.log('no hay preguntas')
      setEmpty(true)
    }

    if (todayAnswers.length === 0) {
      console.log('no hay respuestas')
      setValid(false)
    }
    if (todayAnswers.length > 0) {
      console.log('ya hay respuestas')
      setValid(true)
    }
    console.log(todayAnswers)

    if (valid && empty) {
      setFlag(true)
    }
    if (questions.length === 0 || todayAnswers.length > 0) {
      setNav(false)
      setFlag(false)
    } else {
      setNav(true)
    }
  }

  useEffect(() => {
    if (nav === true) {
      console.log('navegando', valid, nav)
      navigation.navigate('Report')
    }
  }, [nav, valid])

  useEffect(() => {
    if (nav === true) {
      console.log('navegando', valid, nav)
      navigation.navigate('Report')
    }
  }, [nav, empty])

  return (
    <>
      <ModalComponent
        text={'Ya llenaste tu diario de hoy'}
        isVisible={valid && empty}
        onClose={() => setValid(false)}
      />
      <ModalComponent
        text={'Ya llenaste tu diario de hoy'}
        isVisible={valid && empty === false && flag === false}
        onClose={() => setValid(false)}
      />
      <ModalComponent
        text={'No tienes preguntas reflexivas'}
        isVisible={empty && valid === false && flag === false}
        onClose={() => setEmpty(false)}
      />
      <Container>
        <Image width={300} height={300} />
        <Button
          text="Llenar diario reflexivo"
          onPress={() => {
            CheckDay()
          }}
          size="large"
          textType="buttonLarge"
          color="secondary"
          width={'auto'}
          borderRadius={10}
          textColor="background0"
        />
      </Container>
    </>
  )
}

export default MainReport
