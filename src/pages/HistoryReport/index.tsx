import Button from '@components/atoms'
import { ReportTabsScreenProps } from '@navigations/types/ScreenProps'
import React from 'react'
import { Container } from './styles'

const HistoryReport: React.FC<ReportTabsScreenProps<'HistoryReport'>> = () => {
  return (
    <Container>
      <Button type="primary" text="Hello world" />
      <Button type="tertiary" text="Hello world" />
    </Container>
  )
}

export default HistoryReport
