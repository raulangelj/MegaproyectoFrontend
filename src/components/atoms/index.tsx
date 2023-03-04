import { Colors } from '@interfaces/themes'
import React from 'react'
import { StyleProp, Text, ViewStyle } from 'react-native'
import { ButtonWrapper } from './styles'

export interface ButtonProps {
  type: keyof Colors
  text: string
  styles?: StyleProp<ViewStyle>
}
const Button: React.FC<ButtonProps> = ({ type = 'primary', text, styles }) => {
  return (
    <ButtonWrapper type={type} styles={styles}>
      <Text>{text}</Text>
    </ButtonWrapper>
  )
}

export default Button
