import { createSlice } from '@reduxjs/toolkit'

export const psychologySlice = createSlice({
  name: 'psychology',
  initialState: {
    patients: [],
    psychologyQuestions: [],
    loading: false,
    searchedPatientQuestions: [],
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
    onSetSearchedPatientQuestions: (state, action) => {
      console.log('SearchedPatientQuestions', action.payload)
      state.searchedPatientQuestions = action.payload.questions
    },
  },
})

export const {
  onLoadingPatient,
  onSetPatients,
  onSetPsychologyQuestions,
  onSetSearchedPatientQuestions,
} = psychologySlice.actions
