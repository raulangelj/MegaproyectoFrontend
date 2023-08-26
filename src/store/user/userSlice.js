import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: '',
      email: '',
      uid: '',
      category: '',
      token: '',
      tokenInitDate: undefined,
    },
    status: 'checking',
    errorMessage: undefined,
  },
  reducers: {
    onChecking: state => {
      state.status = 'checking'
    },
    onLogin: (state, action) => {
      state.user.name = action.payload.name
      state.user.email = action.payload.email
      state.user.uid = action.payload.uid
      state.user.category = action.payload.category
      state.user.token = action.payload.token
      state.user.tokenInitDate = new Date().getTime()
      state.status = 'authenticated'
    },
    onLogout: (state, { payload }) => {
      state.user = {
        name: '',
        email: '',
        uid: '',
        category: '',
        token: '',
        tokenInitDate: undefined,
      }
      state.status = 'not-authenticated'
      state.errorMessage = payload
    },
    clearErrorMessage: state => {
      state.errorMessage = undefined
    },
  },
})

export const { onLogin, onChecking, onLogout, clearErrorMessage } =
  userSlice.actions
