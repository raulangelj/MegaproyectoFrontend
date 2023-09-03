import { createSlice } from '@reduxjs/toolkit'

export const psychologySlice = createSlice({
  name: 'psychology',
  initialState: {
    patients: [],
    psychologyQuestions: [],
    loading: false,
  },
  reducers: {
    onLoadingPatient: (state, action) => {
      state.loading = action.payload
    },
    onSetPatients: (state, action) => {
      state.patients = action.payload.patients
    },
    onSetPsychologyQuestions: (state, action) => {
      state.psychologyQuestions = action.payload.questions
    },
  },
})

export const { onLoadingPatient, onSetPatients, onSetPsychologyQuestions } =
  psychologySlice.actions
