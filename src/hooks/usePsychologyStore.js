import { useSelector, useDispatch } from 'react-redux'
import { backendAPI } from 'api'
import {
  onLoadingPatient,
  onSetPatients,
  onSetPsychologyQuestions,
} from 'store'

export const usePsychologyStore = () => {
  const dispatch = useDispatch()
  const { patients, psychologyQuestions } = useSelector(
    state => state.psychology,
  )

  const setPatients = async () => {
    try {
      dispatch(onLoadingPatient(true))
      const { data } = await backendAPI.get('/report/getAllPatients')
      dispatch(onSetPatients(data))
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoadingPatient(false))
    }
  }

  const setQuestionsPsychology = async () => {
    try {
      dispatch(onLoadingPatient(true))
      const { data } = await backendAPI.get('/report/getAllQuestions')
      dispatch(onSetPsychologyQuestions(data))
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoadingPatient(false))
    }
  }

  //create patient
  const createPatient = async patient => {
    try {
      dispatch(onLoadingPatient(true))
      const patient2 = {
        name: 'Jose Armando6',
        email: 'balfaro11@gmail.com',
        password: '123456',
        category: 'paciente',
        assignedQuestions: [
          '64e4fa2734782f7f5b0dc78b',
          '64e4f9cf34782f7f5b0dc788',
          '64e4f9b534782f7f5b0dc785',
          '64e4f98634782f7f5b0dc782',
          '64e4db038492f5a530fec94d',
        ],
      }
      console.log('sending patient', patient2)
      const { data } = await backendAPI.post('/auth/newPatient', patient)
      console.log('patient created hook', data)
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoadingPatient(false))
    }
  }

  //Save new question
  const saveQuestion = async question => {
    try {
      dispatch(onLoadingPatient(true))
      const { data } = await backendAPI.post('/report/new', question)
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoadingPatient(false))
    }
  }

  return {
    // properties
    patients,
    psychologyQuestions,
    // methods
    createPatient,
    setPatients,
    setQuestionsPsychology,
    saveQuestion,
  }
}
