import {
  PsychologyTabsScreenProps,
  ReportTabsScreenProps,
} from '@navigations/types/ScreenProps'
import React, { useState } from 'react'
import {
  Container,
  HistoryBlock,
  Text,
  ButtonsContainer,
  DownloadButton,
  Touchable,
  ModalView,
  ModalContainer,
  ReportContainer,
} from './styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import RNHTMLtoPDF from 'react-native-html-to-pdf'
import { Alert, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from '@pages/Report/styles'
import Entypo from 'react-native-vector-icons/Entypo'
import { lightColors } from '@themes/colors'
import { usePatientStore } from 'hooks'
const HistoryReport: React.FC<PsychologyTabsScreenProps<'HistoryReport'>> = ({
  navigation,
  route,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(1)
  const [visible, setVisible] = useState(false)
  const { getAnswersPatient, answers, sortAnswers } = usePatientStore()
  const [sortTracking, setSortTracking] = useState({
    day: false,
    month: false,
    year: false,
  })

  //use effect run when focus
  useFocusEffect(
    React.useCallback(() => {
      getAnswersPatient(route.params?.id)
    }, []),
  )

  const generatePDF = async () => {
    setIsLoading(true)
    const date = new Date()
    try {
      const html = `
        <html>
          <head>
            <style>
              body {
                font-family: 'Helvetica';
                font-size: 12px;
              }
              header, footer {
                height: 50px;
                background-color: #fff;
                color: #000;
                display: flex;
                justify-content: center;
                padding: 0 20px;
              }
              table {
                width: 100%;
                border-collapse: collapse;
              }
              th, td {
                border: 1px solid #000;
                padding: 5px;
              }
              th {
                background-color: #ccc;
              }
            </style>
          </head>
          <body>
            <header>
              <h1>Informe #${count}</h1>
            </header>
            <h1>Informacion</h1>
            <table>
              <tr>
                <th>Informe No.</th>
                <td>${count}</td>
              </tr>
              <tr>
                <th>Fecha de creacion</th>
                <td>${date.getDay() + 1} / ${
        date.getMonth() + 1
      } / ${date.getFullYear()}</td>
              </tr>
              <tr>
                <th>Total reportes</th>
                <td>${answers.length}</td>
              </tr>
            </table>
            <h1>Historial de reportes</h1>
            <table>
              <tr>
                <th>Reporte No.</th>
                <th>Fecha de creacion</th>
                <th>Total de respuestas</th>
              </tr>
              ${answers
                .map(
                  (
                    line: {
                      dateDay: any
                      dateMonth: any
                      dateYear: any
                      answers: string | any[]
                    },
                    index: any,
                  ) => `
                <tr>
                  <td>${index}</td>
                  <td>${line.dateDay} / ${line.dateMonth} / ${line.dateYear}</td>
                  <td>${line.answers.length}</td>
                </tr>
              `,
                )
                .join('')}
            </table>
            <footer>
              <p>Fin del informe!</p>
            </footer>
          </body>
        </html>
      `
      const options = {
        html,
        fileName: `report_${count}`,
        directory: 'Reports',
      }
      const file = await RNHTMLtoPDF.convert(options)
      Alert.alert('Success', `PDF saved to ${file.filePath}`)
      setCount(count + 1)
      setIsLoading(false)
    } catch (error: any) {
      Alert.alert('Error', error.message)
    }
  }

  if (isLoading) {
    return <Text>Generating PDF...</Text>
  }
  //if answers are empty
  if (answers.length === 0) {
    return (
      <Container>
        <Text>Aun no hay reportes disponibles</Text>
      </Container>
    )
  }
  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setVisible(!visible)
        }}
        visible={visible}>
        <ModalContainer>
          <ModalView>
            <Touchable
              onPress={() => {
                sortAnswers({ type: 'day', sorting: sortTracking.day })
                setSortTracking({
                  day: !sortTracking.day,
                  month: false,
                  year: false,
                })
                setVisible(!visible)
              }}>
              <Text>Ordenar por dia</Text>
            </Touchable>
            <Touchable
              onPress={() => {
                sortAnswers({ type: 'month', sorting: sortTracking.month })
                setSortTracking({
                  day: false,
                  month: !sortTracking.month,
                  year: false,
                })
                setVisible(!visible)
              }}>
              <Text>Ordenar por mes</Text>
            </Touchable>
            <Touchable
              onPress={() => {
                sortAnswers({ type: 'year', sorting: sortTracking.year })
                setSortTracking({
                  day: false,
                  month: false,
                  year: !sortTracking.year,
                })
                setVisible(!visible)
              }}>
              <Text>Ordenar por año</Text>
            </Touchable>
          </ModalView>
        </ModalContainer>
      </Modal>
      <ButtonsContainer>
        {/* <DownloadButton
          onPress={() => {
            generatePDF()
          }}>
          <Icon name="file-download" size={30} color={lightColors.quaternary} />
          <Text>Descargar informe</Text>
        </DownloadButton> */}
        <Touchable
          onPress={() => {
            setVisible(!visible)
          }}>
          <Icon name="filter" size={30} color={lightColors.quaternary} />
        </Touchable>
      </ButtonsContainer>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {answers.map(
          (
            report: { dateDay: any; dateMonth: any; dateYear: any },
            index: React.Key | null | undefined,
          ) => {
            return (
              <HistoryBlock
                key={index}
                onPress={() => {
                  navigation.navigate('HistoryView', {
                    id: index + 1,
                    report: report,
                  })
                }}>
                <Entypo name="text-document" size={30} color="black" />
                <ReportContainer>
                  <Text>Reporte #{index + 1}</Text>
                  <Text>{`${report?.dateDay} / ${report?.dateMonth} / ${report?.dateYear}`}</Text>
                </ReportContainer>
              </HistoryBlock>
            )
          },
        )}
      </ScrollView>
    </Container>
  )
}

export default HistoryReport
