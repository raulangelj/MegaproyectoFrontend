import { FontFamilies, FontSizes, Fonts } from '@interfaces/themes'

export const fontsFamilies: FontFamilies = {
  light: 'Quicksand_300Light',
  regular: 'Quicksand_400Regular',
  medium: 'Quicksand_500Medium',
  semibold: 'Quicksand_600SemiBold',
  bold: 'Quicksand_700Bold',
}

const heroFont: Fonts = {
  family: 'bold',
  fontSize: 78,
  lineHeight: 105 / 100,
  fontWeight: 'bold',
  letterSpacing: -1,
  color: 'foreground0',
}

const display1Font: Fonts = {
  family: 'regular',
  fontSize: 56,
  lineHeight: 108 / 100,
  fontWeight: 'bold',
  letterSpacing: -1,
  color: 'foreground0',
}

const display2Font: Fonts = {
  family: 'regular',
  fontSize: 40,
  lineHeight: 112 / 100,
  fontWeight: 'bold',
  letterSpacing: -1,
  color: 'foreground0',
}

const display3Font: Fonts = {
  family: 'regular',
  fontSize: 32,
  lineHeight: 128 / 100,
  fontWeight: 'bold',
  letterSpacing: -1,
  color: 'foreground0',
}

const heading1Font: Fonts = {
  family: 'regular',
  fontSize: 24,
  lineHeight: 128 / 100,
  fontWeight: 'bold',
  letterSpacing: -0.5,
  color: 'foreground0',
}

const heading2Font: Fonts = {
  family: 'regular',
  fontSize: 20,
  lineHeight: 22.5,
  fontWeight: 'bold',
  letterSpacing: -0.5,
  color: 'foreground0',
}

const captionFont: Fonts = {
  family: 'regular',
  fontSize: 16,
  lineHeight: 22.5,
  fontWeight: 'regular',
  letterSpacing: -0.5,
  color: 'foreground0',
}

const paragraphLargeFont: Fonts = {
  family: 'regular',
  fontSize: 16,
  lineHeight: 150 / 100,
  fontWeight: 'regular',
  letterSpacing: -0.5,
  color: 'foreground0',
}

const paragraphLargeBoldFont: Fonts = {
  family: 'regular',
  fontSize: 16,
  lineHeight: 24,
  fontWeight: 'bold',
  letterSpacing: -0.5,
  color: 'foreground0',
}

const paragraphMediumFont: Fonts = {
  family: 'regular',
  fontSize: 14,
  lineHeight: 150 / 100,
  fontWeight: 'regular',
  letterSpacing: 0,
  color: 'foreground0',
}

const paragraphMediumBoldFont: Fonts = {
  family: 'regular',
  fontSize: 14,
  lineHeight: 24,
  fontWeight: 'bold',
  letterSpacing: 0,
  color: 'foreground0',
}

const paragraphSmallFont: Fonts = {
  family: 'regular',
  fontSize: 12,
  lineHeight: 16,
  fontWeight: 'regular',
  letterSpacing: 0,
  color: 'foreground0',
}

const paragraphSmallBoldFont: Fonts = {
  family: 'regular',
  fontSize: 12,
  lineHeight: 16,
  fontWeight: 'bold',
  letterSpacing: 0,
  color: 'foreground0',
}

const buttonLargeFont: Fonts = {
  family: 'regular',
  fontSize: 16,
  lineHeight: 24,
  fontWeight: 'semibold',
  letterSpacing: -0.5,
  color: 'foreground0',
}

const buttonMediumFont: Fonts = {
  family: 'regular',
  fontSize: 14,
  lineHeight: 16,
  fontWeight: 'semibold',
  letterSpacing: 0,
  color: 'foreground0',
}

const buttonSmallFont: Fonts = {
  family: 'regular',
  fontSize: 10,
  lineHeight: 16,
  fontWeight: 'semibold',
  letterSpacing: 0,
  color: 'foreground0',
}

export const fontSizes: FontSizes = {
  hero: heroFont,
  d1: display1Font,
  d2: display2Font,
  d3: display3Font,
  h1: heading1Font,
  h2: heading2Font,
  c: captionFont,
  pLarge: paragraphLargeFont,
  pLargeBold: paragraphLargeBoldFont,
  pMedium: paragraphMediumFont,
  pMediumBold: paragraphMediumBoldFont,
  pSmall: paragraphSmallFont,
  pSmallBold: paragraphSmallBoldFont,
  buttonLarge: buttonLargeFont,
  buttonMedium: buttonMediumFont,
  buttonSmall: buttonSmallFont,
}
