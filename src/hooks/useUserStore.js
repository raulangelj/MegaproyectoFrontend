import { useSelector, useDispatch } from 'react-redux'
import { backendAPI } from 'api'
import { clearErrorMessage, onChecking, onLogin, onLogout } from 'store'

export const useUserStore = () => {
  const dispatch = useDispatch()
  const { user, status, errorMessage } = useSelector(state => state.user)

  const startLogin = async ({ userEmail, password }) => {
    try {
      dispatch(onChecking())
      const { data } = await backendAPI.post('/auth', {
        email: userEmail,
        password: password,
      })
      dispatch(onLogin({ ...data, email: userEmail }))
    } catch (error) {
      console.log('error ', error)
      dispatch(onLogout('Credenciales Incorrectas'))
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
