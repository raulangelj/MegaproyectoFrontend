import { Colors } from '@interfaces/themes'
import React from 'react'
import { StyleProp, Text, ViewStyle } from 'react-native'
import { ButtonWrapper } from './styles'

export interface ButtonProps {
  type: keyof Colors
  text: string
  styles?: StyleProp<ViewStyle>
  borderRadius?: number
  width?: number | string
}
const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  text,
  styles,
  width,
  borderRadius,
}) => {
  return (
    <ButtonWrapper
      type={type}
      styles={styles}
      width={width}
      borderRadius={borderRadius}>
      <Text>{text}</Text>
    </ButtonWrapper>
  )
}

export default Button
