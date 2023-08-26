import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { userSlice } from './user/userSlice'

const middleware = getDefaultMiddleware({
  serializableCheck: false,
})

if (__DEV__) {
  const createDebugger = require('redux-flipper').default
  middleware.push(createDebugger())
}

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: middleware,
})
