import { useSelector, useDispatch } from 'react-redux'
import { setUser } from 'store'

export const useUserStore = () => {
  const dispatch = useDispatch()
  const { name, email, uid, category, token } = useSelector(state => state.user)

  const onLogin = (userName, userEmail, userUid, userCategory, userToken) => {
    dispatch(
      setUser({
        name: userName,
        email: userEmail,
        uid: userUid,
        category: userCategory,
        token: userToken,
      }),
    )
  }

  return {
    // properties
    name,
    email,
    uid,
    category,
    token,
    // methods
    onLogin,
  }
}
