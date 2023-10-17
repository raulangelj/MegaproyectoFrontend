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
      console.log('data get questions', data)
      dispatch(onSetSearchedPatientQuestions(data))
      console.log('after delete patient questions', searchedPatientQuestions)
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoadingPatient(false))
    }
  }

  //delete question from patient
  const deleteQuestion = async body => {
    try {
      dispatch(onLoadingPatient(true))
      console.log('body deleting', body)
      const { data } = await backendAPI.delete('/report/deleteQuestions', {
        data: body,
      })
      console.log('data deleting', data)
      getQuestionsPatient(body.idPatient)
      console.log('data deleting', data)
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoadingPatient(false))
    }
  }

  //update questions to patient
  const updateQuestion = async body => {
    try {
      dispatch(onLoadingPatient(true))
      console.log('body updating', body)
      const { data } = await backendAPI.put('/report/updateQuestions', body)
      console.log('data updating', data)
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoadingPatient(false))
    }
  }

  //edit question info
  const updateQuestionInfo = async body => {
    try {
      dispatch(onLoadingPatient(true))
      const { data } = await backendAPI.put('/report/updateQuestion', body)
      console.log('data updating', data)
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoadingPatient(false))
    }
  }

  //deletePatient
  const deletePatient = async id => {
    console.log('id deleting', id)
    try {
      dispatch(onLoadingPatient(true))
      const { data } = await backendAPI.delete('/report/deletePatient', {
        data: id,
      })
      console.log('data deleting', data)
      await setPatients()
      console.log('after delete patient', patients)
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoadingPatient(false))
    }
  }

  //delete general question
  const deleteGeneralQuestion = async id => {
    console.log('id deleting', id)
    try {
      dispatch(onLoadingPatient(true))
      const { data } = await backendAPI.delete(
        '/report/deleteGeneralQuestion',
        {
          data: id,
        },
      )
      console.log('data deleting', data)
      await setQuestionsPsychology()
      console.log('after delete patient', patients)
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
    deleteQuestion,
    updateQuestion,
    updateQuestionInfo,
    deletePatient,
    deleteGeneralQuestion,
  }
}
