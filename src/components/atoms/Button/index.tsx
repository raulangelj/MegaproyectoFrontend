import { Colors, FontSizes } from '@interfaces/themes'
import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { ButtonContainer, ButtonSize, ButtonWrapper } from './styles'
import Text from '../Text'

export interface ButtonProps {
  onPress: () => void
  text: string
  size: ButtonSize
  textType: keyof Pick<
    FontSizes,
    'buttonSmall' | 'buttonMedium' | 'buttonLarge'
  >
  textStyle?: StyleProp<TextStyle>
  activeOpacity?: number
  color?: keyof Colors
  textColor?: keyof Colors
  borderRadius?: number
  onFocus?: () => void
  style?: StyleProp<TextStyle>
}
const Button: React.FC<ButtonProps> = ({
  text,
  color,
  textColor,
  activeOpacity,
  textStyle,
  textType,
  size,
  borderRadius,
  onPress,
  onFocus = () => {},
  style,
}) => {
  return (
    <ButtonContainer style={style}>
      <ButtonWrapper
        color={color}
        borderRadius={borderRadius}
        size={size}
        onPress={onPress}
        onFocus={onFocus}
        activeOpacity={activeOpacity ?? 0.8}
        accessibilityLabel="Press me">
        <Text
          type={textType}
          color={textColor}
          style={textStyle}
          numberOfLines={1}>
          {text}
        </Text>
      </ButtonWrapper>
    </ButtonContainer>
  )
}

export default Button
