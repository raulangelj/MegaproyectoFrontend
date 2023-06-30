/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/native'
import { FontSize, FontSizes, Fonts, TextFontWeight } from '@interfaces/themes'
import { TextStyle } from 'react-native'

export interface TextProps extends Partial<Fonts> {
  type: FontSize
}

const fontWeightMapping: Record<TextFontWeight, TextStyle['fontWeight']> = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}

export const StyledText = styled.Text<TextProps>(
  ({
    theme,
    type,
    color,
    fontSize,
    fontWeight,
    family,
    lineHeight,
    letterSpacing,
  }) => ({
    color: theme.colors[color ?? theme.fontSizes[type].color],
    fontSize: fontSize ?? theme.fontSizes[type].fontSize,
    fontFamily: theme.fontFamilies[family ?? theme.fontSizes[type].family],
    letterSpacing: letterSpacing ?? theme.fontSizes[type].letterSpacing,
    fontWeight:
      fontWeightMapping[fontWeight ?? theme.fontSizes[type].fontWeight],
    lineHeight: lineHeight ?? theme.fontSizes[type].lineHeight,
  }),
)
