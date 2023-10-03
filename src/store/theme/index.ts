import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppTheme } from '@interfaces/themes'
import { darkTheme, lightTheme } from '@themes/theme'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: lightTheme as AppTheme,
  },
  reducers: {
    toggleTheme(state, action: PayloadAction<AppTheme['name']>) {
      if (action.payload === 'dark') {
        state.theme = darkTheme
      } else {
        state.theme = lightTheme
      }
    },
  },
})

export const { toggleTheme } = themeSlice.actions
