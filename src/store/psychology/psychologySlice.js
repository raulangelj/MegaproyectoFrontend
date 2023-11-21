import { createSlice } from '@reduxjs/toolkit'

export const psychologySlice = createSlice({
  name: 'psychology',
  initialState: {
    patients: [],
    psychologyQuestions: [],
    loading: false,
    searchedPatientQuestions: [],
    totalReports: 0,
    answersByDay: [],
    amountAnswersByDate: {},
    ignoredDaysAnswer: {},
    lastUpdatedReport: Date.now(),
    fullReport: {},
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
    onSetTotalReports: (state, action) => {
      console.log('total reports', action.payload)
      state.totalReports = action.payload.counter
    },
    onSetAnswersByDay: (state, action) => {
      console.log('answers by day', action.payload)
      state.answersByDay = action.payload.generalAnswers
      state.amountAnswersByDate = action.payload.amountAnswersByDate
      state.ignoredDaysAnswer = action.payload.ignoredDaysAnswer
    },
    onSetLastUpdatedReport: (state, action) => {
      console.log('last updated report 2', action.payload)
      state.lastUpdatedReport = action.payload.lastUpdated
    },
    onSetFullReport: (state, action) => {
      console.log('full report', action.payload)
      state.fullReport = action.payload.answersObject
    },
  },
})

export const {
  onLoadingPatient,
  onSetPatients,
  onSetPsychologyQuestions,
  onSetSearchedPatientQuestions,
  onSetTotalReports,
  onSetAnswersByDay,
  onSetLastUpdatedReport,
  onSetFullReport,
} = psychologySlice.actions
