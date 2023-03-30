import { Text, Container } from './styles'
import React from 'react'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'

const HistoryView: React.FC<RootStackScreenProps<'HistoryView'>> = () => {
  return (
    <Container>
      <Text>Reporte 25 marzo 2023</Text>
      <Text>Respondiste el 100% de tus preguntas</Text>
    </Container>
  )
}

export default HistoryView
