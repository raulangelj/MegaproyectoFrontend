/* eslint-disable react-native/no-inline-styles */
import { Container, HeaderContainer, CardContainer } from './styles'
import React from 'react'
import {
  PsychologyTabsScreenProps,
  RootStackScreenProps,
} from '@navigations/types/ScreenProps'
import ImageHistory from '../../assets/images/reminder.svg'
import Text from '@components/atoms/Text'
import { PieChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import { ScrollView } from '@pages/Report/styles'
import { lightColors } from '@themes/colors'

const HistoryView: React.FC<PsychologyTabsScreenProps<'HistoryView'>> = ({
  route,
}) => {
  let emptyAnswers = 0
  console.log(route.params?.report.answers)
  //loop through the answers and if the answer is [""] count as empty
  route.params?.report.answers.map((item: any) => {
    console.log(item.answer)
    if (item.answer.length === 1 && item.answer[0] === '') {
      console.log('empty')
      emptyAnswers++
    } else if (item.answer.length === 1 && item.answer[0] === 0) {
      console.log('empty')
      emptyAnswers++
    }
  })
  return (
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
            name: 'No respondidas',
            population: emptyAnswers,
            color: lightColors.quinary,
            legendFontColor: '#7F7F7F',
            legendFontSize: 10,
          },
          {
            name: 'Respondidas',
            population: route.params?.report.answers.length - emptyAnswers,
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
        <ScrollView>
          {
            //map answer
            route.params?.report.answers.map((item: any) => {
              return (
                <CardContainer key={item.question}>
                  <Text type="h2" key={item.question}>
                    {item.question}
                  </Text>
                  {
                    //map answers
                    item.answer.map((answer: any) => {
                      return (
                        <Text type="h2" key={answer}>
                          {/*if answer is empty or '' return No respondida*/}
                          {answer === '' ? 'No respondida' : answer}
                        </Text>
                      )
                    })
                  }
                </CardContainer>
              )
            })
          }
        </ScrollView>
      </CardContainer>
    </Container>
  )
}

export default HistoryView
