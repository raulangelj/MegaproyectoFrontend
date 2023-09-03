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

  return {
    // properties
    patients,
    psychologyQuestions,
    // methods
    setPatients,
    setQuestionsPsychology,
  }
}
