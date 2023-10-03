import { ThemeProvider } from '@emotion/react'
import AppNavigator from '@navigations/AppNavigator'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import useIsNight from 'hooks/useIsNight'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from 'store'
import { toggleTheme } from 'store/theme'

const App = (): JSX.Element => {
  const isNight = useIsNight()

  return (
    <Provider store={store}>
      <Theme isNight={isNight.isNight}>
        <AppNavigator />
      </Theme>
    </Provider>
  )
}

const Theme: React.FC<{
  children: React.ReactNode
  isNight: Boolean
}> = props => {
  const theme = useAppSelector(state => state.theme.theme)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (props.isNight) {
      dispatch(toggleTheme('dark'))
    } else {
      dispatch(toggleTheme('light'))
    }
  }, [props.isNight])

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default App
