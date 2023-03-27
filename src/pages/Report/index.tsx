import Button from '@components/atoms'
import { ReportTabsScreenProps } from '@navigations/types/ScreenProps'
import React from 'react'
import { Container } from './styles'
import Image from '../../assets/images/reportImage.svg'

const Report: React.FC<ReportTabsScreenProps<'Report'>> = () => {
  return (
    <Container>
      <Image width={100} height={100} />
      <Button type="primary" text="Hello worlds" />
      <Button type="primary" text="Hello worlds" />
    </Container>
  )
}

export default Report
