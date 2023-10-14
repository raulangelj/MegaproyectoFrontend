/* eslint-disable react-native/no-inline-styles */
import { PsychologyTabsScreenProps } from '@navigations/types/ScreenProps'
import React, { useState } from 'react'
import {
  DownloadButton,
  ButtonsContainer,
  Container,
  Text,
  Touchable,
  ScrollView1,
} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { lightColors } from '@themes/colors'
import RNHTMLtoPDF from 'react-native-html-to-pdf'
import { Alert, ImageBackground, Modal, View } from 'react-native'
import Image from '../../assets/images/perminute.svg'

const StatsPsychology: React.FC<
  PsychologyTabsScreenProps<'Statistics'>
> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(1)
  const [visible, setVisible] = useState(false)

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
              <td>5</td>
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
  return (
    <Container>
      {/* <ButtonsContainer>
        <DownloadButton
          onPress={() => {
            generatePDF()
          }}>
          <Icon name="file-download" size={30} color={lightColors.quaternary} />
          <Text>Descargar informe</Text>
        </DownloadButton>
      </ButtonsContainer> */}
      <View
        style={{
          flex: 1,
          backgroundColor: lightColors.primary,
          width: '100%',
        }}>
        <ScrollView1
          contentContainerStyle={{ padding: 0, alignItems: 'center' }}>
          <ImageBackground
            source={require('../../assets/images/liquid-cheese(1).png')}
            style={{ flex: 1, width: '100%', alignItems: 'center' }}
            imageStyle={{
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}>
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 10 }}>
              <Image
                width={200}
                height={100}
                style={{ marginTop: 10, marginBottom: 10 }}
              />
              <DownloadButton
                onPress={() => {
                  generatePDF()
                }}>
                <Icon
                  name="file-download"
                  size={30}
                  color={lightColors.white}
                />
                <Text>Descargar informe</Text>
              </DownloadButton>
            </View>
          </ImageBackground>
          {/*Show the actual number of patients in a white card*/}

          <View
            style={{
              backgroundColor: lightColors.white,
              width: '90%',
              height: 100,
              borderRadius: 10,
              marginTop: 10,
              marginBottom: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: lightColors.primary,
              }}>
              5
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Reportes generados
            </Text>
          </View>
        </ScrollView1>
      </View>
    </Container>
  )
}

export default StatsPsychology
