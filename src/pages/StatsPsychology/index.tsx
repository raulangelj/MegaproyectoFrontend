/* eslint-disable react-native/no-inline-styles */
import { PsychologyTabsScreenProps } from '@navigations/types/ScreenProps'
import Text from '@components/atoms/Text'
import React from 'react'

const StatsPsychology: React.FC<
  PsychologyTabsScreenProps<'Statistics'>
> = () => {
  return (
    <Text
      type="h1"
      style={{
        flex: 0,
        textAlignVertical: 'center',
      }}>
      Estadisticas
    </Text>
  )
}

export default StatsPsychology
