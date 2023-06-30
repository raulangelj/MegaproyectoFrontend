import React from 'react'
import { StyledText, TextProps as StyledTextProps } from './styles'
import { TextStyle, StyleProp } from 'react-native'

export interface TextProps extends StyledTextProps {
  numberOfLines?: number
  style?: StyleProp<TextStyle>
  children?: React.ReactNode
}

const Text: React.FC<TextProps> = ({
  children,
  type,
  color,
  fontSize,
  fontWeight,
  family,
  lineHeight,
  letterSpacing,
  numberOfLines,
  style,
}) => {
  return (
    <StyledText
      type={type}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      family={family}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      numberOfLines={numberOfLines}
      style={style}>
      {children}
    </StyledText>
  )
}

export default Text
