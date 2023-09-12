import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { backendAPI } from 'api'
import { useNavigation } from '@react-navigation/native'
import { clearErrorMessage, onChecking, onLogin, onLogout } from 'store'
import type { RootState } from 'store/store'

export const useUserStore = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { user, status, errorMessage } = useAppSelector(state => state.user)

  const startLogin = async ({
    userEmail,
    password,
  }: {
    userEmail: string
    password: string
  }) => {
    try {
      dispatch(onChecking())
      const { data } = await backendAPI.post('/auth', {
        email: userEmail,
        password: password,
      })
      dispatch(onLogin({ ...data, email: userEmail }))
      // navigate to home
      navigation.navigate('Landing')
    } catch (error) {
      console.error('error ', error)
      dispatch(onLogout('Credenciales Incorrectas!'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  return {
    // properties
    user,
    status,
    errorMessage,
    // methods
    startLogin,
  }
}
