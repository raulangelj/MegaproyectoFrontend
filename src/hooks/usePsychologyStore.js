import { useSelector, useDispatch } from 'react-redux'
import { backendAPI } from 'api'
import {
  onLoadingPatient,
  onSetPatients,
  onSetPsychologyQuestions,
  onSetSearchedPatientQuestions,
} from 'store'

export const usePsychologyStore = () => {
  const dispatch = useDispatch()
  const { patients, psychologyQuestions, searchedPatientQuestions } =
    useSelector(state => state.psychology)

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

  //get questions of a patient
  const getQuestionsPatient = async id => {
    try {
      console.log('id user', id)
      dispatch(onLoadingPatient(true))
      const { data } = await backendAPI.get('/report/getQuestionsPatient', {
        params: { id },
      })
      dispatch(onSetSearchedPatientQuestions(data))
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
    searchedPatientQuestions,
    // methods
    createPatient,
    setPatients,
    setQuestionsPsychology,
    saveQuestion,
    getQuestionsPatient,
  }
}
