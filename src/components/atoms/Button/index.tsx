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
  onPress: () => void
}
const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  text,
  styles,
  width,
  borderRadius,
  onPress,
}) => {
  return (
    <ButtonWrapper
      type={type}
      styles={styles}
      width={width}
      borderRadius={borderRadius}
      onPress={onPress}>
      <Text>{text}</Text>
    </ButtonWrapper>
  )
}

export default Button
