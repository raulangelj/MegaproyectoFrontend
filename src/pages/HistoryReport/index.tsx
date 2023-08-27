import { ReportTabsScreenProps } from '@navigations/types/ScreenProps'
import React, { useEffect, useState } from 'react'
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
import axios from 'axios'
const HistoryReport: React.FC<
  ReportTabsScreenProps<'HistoryReportMain'>
> = () => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(1)
  const [visible, setVisible] = useState(false)

  const [reports, setReports] = useState<any[]>([])

  //GET request of answers
  const getAnswers = async () => {
    await axios
      .get('http://192.168.1.3:400/api/report/getAnswers', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NGU0ZmIyNzNmM2JkYmQ5NDk5OTc5MDQiLCJuYW1lIjoiUGVkcm8gcGFjaWVudGUiLCJpYXQiOjE2OTMwNjg0NDQsImV4cCI6MTY5MzA3NTY0NH0.Egq7L0Nn88c851saAoh7FaRjgfeLwKq-IKL_-2hnIYw',
        },
      })
      .then(response => {
        console.log('RESPONSE', response.data)
        console.log(typeof response.data.answers)
        const updatedReports = response.data.answers.map(
          (report: { creationDate: string | number | Date }) => {
            const date = new Date(report.creationDate)
            return {
              ...report,
              dateDay: date.getDate(),
              dateMonth: date.getMonth() + 1,
              dateYear: date.getFullYear(),
            }
          },
        )

        setReports(updatedReports)
      })
      .catch(error2 => {
        console.log('ERROR', error2)
      })
  }

  //use effect run when focus
  useFocusEffect(
    React.useCallback(() => {
      getAnswers()
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
                <td>${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}</td>
              </tr>
              <tr>
                <th>Total reportes</th>
                <td>${reports.length}</td>
              </tr>
            </table>
            <h1>Historial de reportes</h1>
            <table>
              <tr>
                <th>Reporte No.</th>
                <th>Fecha de creacion</th>
                <th>Total de respuestas</th>
              </tr>
              ${reports
                .map(
                  (line, index) => `
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
                setReports(reports.sort((a, b) => a.dateDay - b.dateDay))

                setVisible(!visible)
              }}>
              <Text>Ordenar por dia</Text>
            </Touchable>
            <Touchable
              onPress={() => {
                setReports(reports.sort((a, b) => a.dateMonth - b.dateMonth))
                setVisible(!visible)
              }}>
              <Text>Ordenar por mes</Text>
            </Touchable>
            <Touchable
              onPress={() => {
                setReports(reports.sort((a, b) => a.dateYear - b.dateYear))
                setVisible(!visible)
              }}>
              <Text>Ordenar por año</Text>
            </Touchable>
          </ModalView>
        </ModalContainer>
      </Modal>
      <ButtonsContainer>
        <DownloadButton
          onPress={() => {
            generatePDF()
          }}>
          <Icon name="file-download" size={30} color={lightColors.quaternary} />
          <Text>Descargar informe</Text>
        </DownloadButton>
        <Touchable
          onPress={() => {
            setVisible(!visible)
          }}>
          <Icon name="filter" size={30} color={lightColors.quaternary} />
        </Touchable>
      </ButtonsContainer>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {reports.map((report, index) => {
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
        })}
      </ScrollView>
    </Container>
  )
}

export default HistoryReport
