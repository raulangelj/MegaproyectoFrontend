import { ReportTabsScreenProps } from '@navigations/types/ScreenProps'
import Image from '../../assets/images/reportMain.svg'
import { Container } from './styles'
import React from 'react'
import Button from '@components/atoms/Button'
import { useNavigation } from '@react-navigation/native'

const MainReport: React.FC<ReportTabsScreenProps<'MainReport'>> = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <Image width={300} height={300} />
      <Button
        text="Generar reporte"
        onPress={() => {
          console.log('Reporte generado')
          navigation.navigate('Report')
        }}
        size="large"
        textType="buttonLarge"
        color="secondary"
        width={'auto'}
        borderRadius={10}
        textColor="background0"
      />
    </Container>
  )
}

export default MainReport
