import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    uid: '',
    category: '',
    token: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.uid = action.payload.uid
      state.category = action.payload.category
      state.token = action.payload.token
    },
  },
})

export const { setUser } = userSlice.actions
