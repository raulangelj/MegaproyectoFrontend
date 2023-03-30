import { ReportTabsScreenProps } from '@navigations/types/ScreenProps'
import React from 'react'
import { Container, HistoryBlock, Text } from './styles'
import { useNavigation } from '@react-navigation/native'

const HistoryReport: React.FC<ReportTabsScreenProps<'HistoryReport'>> = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <HistoryBlock onPress={() => navigation.navigate('HistoryView')}>
        <Text>Reporte 25 marzo 2023</Text>
      </HistoryBlock>

      <HistoryBlock>
        <Text>Reporte 26 marzo 2023</Text>
      </HistoryBlock>

      <HistoryBlock>
        <Text>Reporte 27 marzo 2023</Text>
      </HistoryBlock>
    </Container>
  )
}

export default HistoryReport
