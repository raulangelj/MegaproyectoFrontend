import { createSlice } from '@reduxjs/toolkit'

// question = {
//     type: ,
//     question:,
//     options:,
//     checkBoxOptions:,
//     isAnswered:,
// }

// answer = {
//     question:,
//     answer:,
// }

export const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    questions: [],
    answers: [],
    loading: false,
  },
  reducers: {
    onLoading: (state, action) => {
      state.loading = action.payload
    },
    onSetQuestions: (state, action) => {
      console.log('action.payload ', action.payload)
      state.questions = action.payload.questions
    },
    onSetAnswers: (state, action) => {
      //console.log('action.payload answers ', action.payload)
      state.answers = action.payload.answers
    },
    onUpdateAnswer: (state, action) => {
      console.log('action.payload update', action.payload)
      state.answers = action.payload
    },
  },
})

export const { onLoading, onSetQuestions, onSetAnswers, onUpdateAnswer } =
  patientSlice.actions
