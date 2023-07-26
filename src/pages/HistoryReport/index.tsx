import { ReportTabsScreenProps } from '@navigations/types/ScreenProps'
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
} from './styles'
import { useNavigation } from '@react-navigation/native'
import RNHTMLtoPDF from 'react-native-html-to-pdf'
import { Alert, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from '@pages/Report/styles'

const HistoryReport: React.FC<ReportTabsScreenProps<'HistoryReport'>> = () => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(1)
  const [visible, setVisible] = useState(false)

  const reportsArr = [
    {
      id: 1,
      dateDay: 25,
      dateMonth: 3,
      dateYear: 2023,
      answered: true,
      responses: 3,
    },
    {
      id: 2,
      dateDay: 26,
      dateMonth: 4,
      dateYear: 2023,
      answered: true,
      responses: 3,
    },
    {
      id: 3,
      dateDay: 20,
      dateMonth: 5,
      dateYear: 2021,
      answered: true,
      responses: 3,
    },
    {
      id: 4,
      dateDay: 20,
      dateMonth: 5,
      dateYear: 2021,
      answered: true,
      responses: 3,
    },
    {
      id: 5,
      dateDay: 20,
      dateMonth: 5,
      dateYear: 2021,
      answered: true,
      responses: 3,
    },
    {
      id: 6,
      dateDay: 20,
      dateMonth: 5,
      dateYear: 2021,
      answered: true,
      responses: 3,
    },
    {
      id: 7,
      dateDay: 20,
      dateMonth: 5,
      dateYear: 2021,
      answered: true,
      responses: 3,
    },
    {
      id: 8,
      dateDay: 20,
      dateMonth: 5,
      dateYear: 2021,
      answered: true,
      responses: 3,
    },
    {
      id: 9,
      dateDay: 20,
      dateMonth: 5,
      dateYear: 2021,
      answered: true,
      responses: 3,
    },
    {
      id: 10,
      dateDay: 20,
      dateMonth: 5,
      dateYear: 2021,
      answered: true,
      responses: 3,
    },
    {
      id: 11,
      dateDay: 20,
      dateMonth: 5,
      dateYear: 2021,
      answered: true,
      responses: 3,
    },
  ]

  const [reports, setReports] = useState(reportsArr)

  const generatePDF = async () => {
    setIsLoading(true)
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
                <td>29-Jul-2022</td>
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
                <th>Titulo</th>
                <th>Total de respuestas</th>
              </tr>
              ${reports
                .map(
                  line => `
                <tr>
                  <td>${line.id}</td>
                  <td>${line.dateDay}</td>
                  <td>${line.responses}</td>
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
    <ScrollView>
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
            <Icon name="file-download" size={30} color="black" />
            <Text>Descargar informe</Text>
          </DownloadButton>
          <Touchable
            onPress={() => {
              setVisible(!visible)
            }}>
            <Icon name="filter" size={30} color="black" />
          </Touchable>
        </ButtonsContainer>

        {reports.map(report => (
          <HistoryBlock
            key={report.id}
            onPress={() => {
              navigation.navigate('HistoryView')
            }}>
            <Text>Reporte #{report.id}</Text>
            <Text>
              {report.dateDay}/{report.dateMonth}/{report.dateYear}
            </Text>
          </HistoryBlock>
        ))}
      </Container>
    </ScrollView>
  )
}

export default HistoryReport
