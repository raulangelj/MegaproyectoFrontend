export interface Colors {
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
  transparent: 'transparent'
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
}
