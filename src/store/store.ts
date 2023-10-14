import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { userSlice } from './user/userSlice'
import { patientSlice } from './patient/patientSlice'
import { persistReducer, persistStore } from 'redux-persist'
import { psychologySlice } from './psychology/psychologySlice'
import { themeSlice } from './theme'
import { activitiesSlice } from './activities'

const middleware = getDefaultMiddleware({
  serializableCheck: false,
})

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default
//   middleware.push(createDebugger())
// }

const rootReducer = combineReducers({
  user: userSlice.reducer,
  patient: patientSlice.reducer,
  psychology: psychologySlice.reducer,
  theme: themeSlice.reducer,
  activities: activitiesSlice.reducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['activities'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
