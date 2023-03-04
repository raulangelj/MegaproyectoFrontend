import { ThemeProvider } from '@emotion/react'
import AppNavigator from '@navigations/AppNavigator'
import { lightTheme } from '@themes/theme'
import React from 'react'

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppNavigator />
    </ThemeProvider>
  )
}

export default App
