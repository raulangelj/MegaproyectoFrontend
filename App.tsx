import { ThemeProvider } from '@emotion/react'
import AppNavigator from '@navigations/AppNavigator'
import { lightTheme } from '@themes/theme'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'store'

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </ThemeProvider>
  )
}

export default App
