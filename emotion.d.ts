import { AppTheme } from '@interfaces/themes'

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
