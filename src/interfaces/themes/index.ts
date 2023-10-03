export interface Colors {
  activityPrimary: string
  activitySecondary: string
  activityTertiary: string
  activityQuaternary: string
  activityQuinary: string
  activityBackground0: string
  activityForeground0: string

  primary: string
  secondary: string
  tertiary: string
  quaternary: string
  quinary: string
  senary: string
  error: string
  success: string
  warning: string
  info: string
  white: string
  foreground0: string
  foreground1: string
  foreground2: string
  foreground3: string
  foreground4: string
  foreground5: string
  background0: string
  background1: string
  background2: string
  background3: string
  background4: string
  background5: string
  flatColor1: string
  flatColor2: string
  flatColor3: string
  flatColor4: string
  flatColor5: string
  buttonColor0: string
  transparent: 'transparent'
}

export interface Fonts {
  family: keyof FontFamilies
  fontSize: number
  lineHeight: number
  fontWeight: TextFontWeight
  letterSpacing: number
  color: keyof Colors
}

export interface FontFamilies {
  light: string
  regular: string
  medium: string
  semibold: string
  bold: string
}

export type TextFontWeight =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'

export type FontSize = keyof FontSizes
export interface FontSizes {
  hero: Fonts
  d1: Fonts
  d2: Fonts
  d3: Fonts
  h1: Fonts
  h2: Fonts
  c: Fonts
  pLarge: Fonts
  pLargeBold: Fonts
  pMedium: Fonts
  pMediumBold: Fonts
  pSmall: Fonts
  pSmallBold: Fonts
  buttonLarge: Fonts
  buttonMedium: Fonts
  buttonSmall: Fonts
}

export interface Sizes {
  xxxs: number
  xxs: number
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
  xxxl: number
}

export interface AppTheme {
  name: string
  sizes: Sizes
  colors: Colors
  fontSizes: FontSizes
  fontFamilies: FontFamilies
}
