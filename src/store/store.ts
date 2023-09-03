import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { userSlice } from './user/userSlice'
import { patientSlice } from './patient/patientSlice'
import { psychologySlice } from './psychology/psychologySlice'

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
    patient: patientSlice.reducer,
    psychology: psychologySlice.reducer,
  },
  middleware: middleware,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
