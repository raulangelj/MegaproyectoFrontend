/* eslint-disable react-native/no-inline-styles */
import { Container, HeaderContainer, CardContainer } from './styles'
import React from 'react'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import ImageHistory from '../../assets/images/reminder.svg'
import Text from '@components/atoms/Text'
import { PieChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import { ScrollView } from '@pages/Report/styles'
import { lightColors } from '@themes/colors'

const HistoryView: React.FC<RootStackScreenProps<'HistoryView'>> = ({
  route,
}) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <HeaderContainer>
          <ImageHistory width={100} height={100} />
          <Text
            type="h1"
            style={{
              flex: 0,
              textAlignVertical: 'center',
            }}>
            Reporte #{route.params?.id}
          </Text>
        </HeaderContainer>
        <PieChart
          data={[
            {
              name: 'Correctas',
              population: 21500000,
              color: lightColors.quinary,
              legendFontColor: '#7F7F7F',
              legendFontSize: 10,
            },
            {
              name: 'Incorrectas',
              population: 2800000,
              color: lightColors.quaternary,
              legendFontColor: '#7F7F7F',
              legendFontSize: 10,
            },
          ]}
          width={Dimensions.get('window').width - 20}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          paddingLeft="0"
          accessor="population"
          backgroundColor="transparent"
        />
        <CardContainer>
          <Text type="h1">Preguntas</Text>
          <Text type="h1">Correctas</Text>
          <Text type="h1">Incorrectas</Text>
        </CardContainer>
      </Container>
    </ScrollView>
  )
}

export default HistoryView
