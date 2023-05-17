import { ReportTabsScreenProps } from '@navigations/types/ScreenProps'
import React, { useState } from 'react'
import {
  Container,
  HistoryBlock,
  Text,
  ButtonsContainer,
  DownloadButton,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import RNHTMLtoPDF from 'react-native-html-to-pdf'
import { Alert } from 'react-native'
import DownloadIcon from '../../assets/images/download.svg'

const HistoryReport: React.FC<ReportTabsScreenProps<'HistoryReport'>> = () => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(1)

  const reports = [
    {
      id: 1,
      date: '25 marzo 2023',
      answered: true,
      responses: 3,
    },
    {
      id: 2,
      date: '26 marzo 2023',
      answered: true,
      responses: 3,
    },
    {
      id: 3,
      date: '27 mazo 2023',
      answered: true,
      responses: 2,
    },
  ]

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
                <td>$13232</td>
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
                  <td>${line.date}</td>
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
    <Container>
      <ButtonsContainer>
        <DownloadButton
          onPress={() => {
            generatePDF()
          }}>
          <DownloadIcon width={50} />
          <Text>Descargar informe</Text>
        </DownloadButton>
      </ButtonsContainer>

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
