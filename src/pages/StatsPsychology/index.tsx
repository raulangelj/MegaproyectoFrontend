/* eslint-disable react-native/no-inline-styles */
import { PsychologyTabsScreenProps } from '@navigations/types/ScreenProps'
import React, { useState, useRef } from 'react'
import { DownloadButton, Container, ScrollView1, TextDownload } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { lightColors } from '@themes/colors'
import RNHTMLtoPDF from 'react-native-html-to-pdf'
import { Alert, Dimensions, ImageBackground, View } from 'react-native'
import Image from '../../assets/images/perminute.svg'
import { BarChart, LineChart } from 'react-native-chart-kit'
import { usePsychologyStore, usePatientStore } from 'hooks'
import Text from '@components/atoms/Text'
import SelectDropdown from 'react-native-select-dropdown'
import ViewShot from 'react-native-view-shot'
import RNFetchBlob from 'rn-fetch-blob'
const StatsPsychology: React.FC<
  PsychologyTabsScreenProps<'Statistics'>
> = () => {
  const chartRef1 = useRef()
  const chartRef2 = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(1)
  const [uris, setUris] = useState([])
  const {
    patients,
    getAllAnswers,
    totalReports,
    setPatients,
    answersByDay,
    amountAnswersByDate,
    getAnswersByDate,
    ignoredDaysAnswer,
    lastUpdatedReport,
    getLastUpdateReport,
    getFullReport,
    fullReport,
  } = usePsychologyStore()
  const { answers } = usePatientStore()
  const [dataArray, setData] = useState({})
  const [resultados, setResultados] = useState({})
  const [resultadosPaciente, setResultadosPaciente] = useState({})

  //get the number of reports in general
  //use effect run when focus
  React.useEffect(() => {
    console.log('effect stats')
    getAnswersByDate()
    getAllAnswers()
    setPatients()
    getLastUpdateReport()
    getFullReport()
  }, [])

  //when answersByDate is set , run function
  React.useEffect(() => {
    console.log(
      'effect stats answers by day',
      answersByDay,
      amountAnswersByDate,
    )
    if (answersByDay) {
      setData(answersByDay)
      setResultados(calcularPorcentajeCompletitud(amountAnswersByDate))
    }
  }, [answersByDay, amountAnswersByDate])

  const calcularPromedioCompletitudPorPaciente = (objeto, idPatient) => {
    console.log('objeto', objeto)
    const resultadosPorFecha = {}

    Object.keys(objeto).forEach(key => {
      const fechaStr = key
      const answersObject = objeto[key]

      let totalPreguntas = 0
      let preguntasRespondidas = 0

      for (const answer of answersObject) {
        if (answer.patientId === idPatient) {
          for (const item of answer.answers) {
            totalPreguntas++
            if (item.answer[0] !== '' && item.answer[0] !== 0) {
              preguntasRespondidas++
            }
          }
        }
      }

      const completitud =
        totalPreguntas > 0 ? (preguntasRespondidas / totalPreguntas) * 100 : 0

      resultadosPorFecha[fechaStr] = completitud
    })

    console.log(resultadosPorFecha)
    return resultadosPorFecha
  }

  const calcularPorcentajeCompletitud = objeto => {
    console.log('objeto', objeto)
    const resultadosPorFecha = {}

    Object.keys(objeto).forEach(key => {
      const fechaStr = key

      let totalPreguntas = 0
      let preguntasRespondidas = 0
      //for every element inside objeto[key]
      for (const answer of objeto[key]) {
        for (const item of answer.answers) {
          totalPreguntas++
          if (item.answer[0] !== '' && item.answer[0] !== 0) {
            preguntasRespondidas++
          }
        }
      }
      // if (objeto[key][0] !== undefined) {
      //   objeto[key][0].answers.forEach(item => {
      //     console.log('itemmmm', item)
      //     totalPreguntas++
      //     if (item.answer[0] !== '' && item.answer[0] !== 0) {
      //       console.log('entre')
      //       preguntasRespondidas++
      //     }
      //   })
      // }

      const completitud =
        totalPreguntas > 0 ? (preguntasRespondidas / totalPreguntas) * 100 : 0

      if (resultadosPorFecha[fechaStr]) {
        resultadosPorFecha[fechaStr].push(completitud)
      } else {
        resultadosPorFecha[fechaStr] = [completitud]
      }
    })

    const resultadosFinales = {}

    for (const fecha in resultadosPorFecha) {
      const completitudArray = resultadosPorFecha[fecha]
      const promedio =
        completitudArray.reduce((total, current) => total + current, 0) /
        completitudArray.length
      resultadosFinales[fecha] = promedio
    }
    console.log(resultadosFinales)
    return resultadosFinales
  }

  //useEffect when uris change
  React.useEffect(() => {
    console.log('uris', uris)
    if (uris.length !== 0) {
      handlePdfGeneration()
    }
  }, [uris])

  const getUris = async () => {
    const promises = [chartRef1, chartRef2].map(ref => ref.current.capture())
    await Promise.all(promises)
      .then(uriss => {
        setUris(uriss)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handlePdfGeneration = async () => {
    if (uris.length !== 0) {
      console.log('IM HERE', fullReport, lastUpdatedReport)
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
            <h1>Informe de progreso </h1>
          </header>
          <h1>Informacion</h1>
          <table>
            <tr>
              <th>Cantidad de pacientes</th>
              <td>${patients.length}</td>
            </tr>
            <tr>
              <th>Fecha de creacion</th>
              <td>${new Date(lastUpdatedReport).toISOString().slice(0, 10)}</td>
            </tr>
            <tr>
              <th>Total reportes</th>
              <td>${totalReports}</td>
            </tr>
          </table>
          <h1>Porcentaje de pacientes que respondieron por dia</h1>
          <img src="${uris[0]}" />
          <h1>Porcentaje promedio de completitud de reporte por dia</h1>
          <img src="${uris[1]}" />
          <h1>Informacion critica de los pacientes</h1>
          <h2>Respuestas diario reflexivo</h2>
          <table>
            <tr>
              <th>Paciente</th>
              <th>Dias sin responder</th>
            </tr>
            ${Object.keys(ignoredDaysAnswer)
              .filter(key => key !== 'total')
              .sort((a, b) => ignoredDaysAnswer[a] - ignoredDaysAnswer[b])
              .map(key => {
                const diasFaltantes =
                  ignoredDaysAnswer.total - ignoredDaysAnswer[key]
                return `
                  <tr>
                    <td>${key}</td>
                    <td>${diasFaltantes}</td>
                  </tr>
                `
              })}
          </table>
          <h2>Pacientes con alerta de depresion</h2>
          <h1>Informe de pacientes individual</h1>
          
            ${Object.keys(fullReport)
              .map(key => {
                const line = fullReport[key]
                console.log('line', line)
                return `
                <h1>Informe de paciente ${key}</h1>
                
                ${line.map((item, index) => {
                  return `
                    <h2>Fecha realizacion ${item.dateDay} / ${
                    item.dateMonth
                  } / ${item.dateYear} </h2>
                    <table>
                    <tr>
                      <th>Pregunta</th>
                      <th>Respuesta</th>
                    </tr>
                    ${item.answers
                      .map(answer => {
                        let displayAnswer = answer.answer[0]
                        if (displayAnswer === '' || displayAnswer === 0) {
                          displayAnswer = 'No respondida'
                        }
                        return `
                          <tr>
                            <td>${answer.question}</td>
                            <td>${displayAnswer}</td>
                          </tr>
                        `
                      })
                      .join('')}
                    </table>
                  `
                })}
                
              `
              })
              .join('')}
      
          <footer>
            <p>Fin del informe!</p>
          </footer>
        </body>
      </html>
    `
        const options = {
          html,
          fileName: `report_${new Date(lastUpdatedReport)
            .toISOString()
            .slice(0, 10)}.pdf`,
          directory: 'Download',
          base64: true,
        }
        const file = await RNHTMLtoPDF.convert(options).catch(error => {
          console.log(error)
        })
        let filePath = RNFetchBlob.fs.dirs.DownloadDir + '/' + options.fileName
        RNFetchBlob.fs.writeFile(filePath, file.base64, 'base64')
        setCount(count + 1)
        setIsLoading(false)
      } catch (error: any) {
        Alert.alert('Error', error.message)
      }
    }
  }

  const groupDataByDay = data => {
    console.log('DATA', data)
    return data.reduce((acc, item) => {
      const date = new Date(item)
      const day = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`
      if (!acc[day]) {
        acc[day] = 0
      }
      acc[day] += 1
      return acc
    }, {})
  }

  const data = {
    //the keys of amountAnswersByDate
    labels: Object.keys(resultados),
    datasets: [
      {
        data: Object.values(resultados),
      },
    ],
  }

  if (isLoading) {
    return <Text type="buttonLarge">Generating PDF...</Text>
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
                  getUris()
                }}>
                <Icon
                  name="file-download"
                  size={30}
                  color={lightColors.white}
                />
                <TextDownload>Descargar informe</TextDownload>
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
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            {/* hacer una division para cantidad de reportes y cantidad  de pacientes */}
            <View style={{ alignItems: 'center' }}>
              <Text
                type="buttonLarge"
                style={{
                  color: lightColors.quaternary,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Pacientes
              </Text>
              <Text
                type="buttonLarge"
                style={{
                  color: lightColors.quaternary,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {patients.length}
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text
                type="buttonLarge"
                style={{
                  color: lightColors.quaternary,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Reportes
              </Text>
              <Text
                type="pMedium"
                style={{
                  color: lightColors.quaternary,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {totalReports}
              </Text>
            </View>
          </View>
          <Text type="pLargeBold" style={{ fontSize: 20, textAlign: 'center' }}>
            Porcentaje de pacientes que respondieron por dia
          </Text>
          {Object.keys(dataArray).length === 0 && (
            <Text type="pLargeBold" style={{ fontSize: 20 }}>
              Aun hay datos para mostrar
            </Text>
          )}
          {Object.keys(dataArray).length > 0 && (
            <ViewShot ref={chartRef1} options={{ format: 'jpg', quality: 0.9 }}>
              <LineChart
                data={{
                  //the first position of dictionary

                  labels: Object.keys(dataArray),
                  datasets: [
                    {
                      data: [
                        //percentage based on patients.length of second position of dictionary
                        ...Object.values(dataArray).map(
                          (item: any) => (item / patients.length) * 100,
                        ),
                      ],
                    },
                  ],
                }}
                width={Dimensions.get('window').width - 30} // from react-native
                height={220}
                yAxisSuffix="%"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: '#fb8c00',
                  backgroundGradientTo: '#ffa726',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                fromZero={true}
              />
            </ViewShot>
          )}
          <Text type="pLargeBold" style={{ fontSize: 20, textAlign: 'center' }}>
            Porcentaje de completitud de reporte por dia
          </Text>
          <ViewShot ref={chartRef2} options={{ format: 'jpg', quality: 0.9 }}>
            <BarChart
              //style={graphStyle}
              data={data}
              width={Dimensions.get('window').width - 30}
              height={220}
              yAxisLabel=""
              yAxisSuffix="%"
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.5,
                useShadowColorFromDataset: false, // optional
              }}
              style={{
                borderRadius: 16,
              }}
              fromZero={true}
              yMax={100}
            />
          </ViewShot>
          <Text type="pLargeBold" style={{ fontSize: 20 }}>
            Porcentaje de completitud por paciente
          </Text>
          {/* Dropdown con los pacientes*/}
          <SelectDropdown
            data={patients.map(item => item.name)}
            onSelect={(selectedItem, index) => {
              console.log('selectedItem', selectedItem, patients[index])
              setResultadosPaciente(
                calcularPromedioCompletitudPorPaciente(
                  amountAnswersByDate,
                  patients[index]._id,
                ),
              )
            }}
            buttonStyle={{
              borderRadius: 5,
              backgroundColor: lightColors.quinary,
              marginTop: 20,
            }}
            defaultButtonText="Pacientes"
            buttonTextStyle={{ color: 'white' }}
          />

          {Object.keys(resultadosPaciente).length > 0 && (
            <BarChart
              data={{
                //the first position of dictionary
                labels: Object.keys(resultadosPaciente),
                datasets: [
                  {
                    data: [
                      //percentage based on patients.length of second position of dictionary
                      ...Object.values(resultadosPaciente),
                    ],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 30} // from react-native
              height={220}
              yAxisSuffix="%"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 1, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              fromZero={true}
            />
          )}

          <Text type="pLargeBold" style={{ fontSize: 20 }}>
            Informacion critica
          </Text>
          <View
            style={{
              backgroundColor: lightColors.white,
              width: '90%',
              borderRadius: 10,
              marginTop: 10,
              marginBottom: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            {/* hacer una division para cantidad de reportes y cantidad  de pacientes */}
            <View style={{ alignItems: 'center' }}>
              <Text
                type="pLarge"
                style={{
                  color: lightColors.quaternary,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                Respuestas diario reflexivo
              </Text>
              {/* Render a card with patient name and days withouth answer */}

              {Object.keys(ignoredDaysAnswer)
                .filter(key => key !== 'total')
                .sort((a, b) => ignoredDaysAnswer[a] - ignoredDaysAnswer[b])
                .map(key => {
                  const diasFaltantes =
                    ignoredDaysAnswer.total - ignoredDaysAnswer[key]
                  return (
                    <View key={key} style={{ marginBottom: 10 }}>
                      <Text
                        style={{ fontSize: 18, fontWeight: 'bold' }}
                        type="pLarge">
                        {key}
                      </Text>
                      <Text style={{ fontSize: 16 }} type="pLarge">
                        Días sin responder: {diasFaltantes}
                      </Text>
                    </View>
                  )
                })}
            </View>
          </View>
          <View
            style={{
              backgroundColor: lightColors.white,
              width: '90%',
              height: 100,
              borderRadius: 10,
              marginTop: 10,
              marginBottom: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            {/* hacer una division para cantidad de reportes y cantidad  de pacientes */}
            <View style={{ alignItems: 'center' }}>
              <Text
                type="buttonLarge"
                style={{
                  color: lightColors.quaternary,
                  fontWeight: 'bold',
                }}>
                Pacientes con alerta de depresion
              </Text>
              <Text
                type="buttonLarge"
                style={{
                  color: lightColors.quaternary,
                  fontWeight: 'bold',
                }}>
                {patients.length}
              </Text>
            </View>
          </View>
          {/* Top 3 pacientes que han presentado mas sintomas de depresion y que no responden */}
        </ScrollView1>
      </View>
    </Container>
  )
}

export default StatsPsychology
