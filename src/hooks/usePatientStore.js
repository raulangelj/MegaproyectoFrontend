import { useSelector, useDispatch } from 'react-redux'
import { backendAPI } from 'api'
import { onLoading, onSetQuestions, onSetAnswers, onUpdateAnswer } from 'store'

export const usePatientStore = () => {
  const dispatch = useDispatch()
  const { questions } = useSelector(state => state.patient)
  const { answers } = useSelector(state => state.patient)

  const setQuestions = async () => {
    try {
      dispatch(onLoading(true))
      const { data } = await backendAPI.get('/report/getAssignedQuestions')
      dispatch(onSetQuestions(data))
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoading(false))
    }
  }
  //one answer
  const saveAnswer = async ({ answersData }) => {
    try {
      dispatch(onLoading(true))
      await backendAPI.post('/report/saveAnswer', {
        answers: answersData,
      })
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoading(false))
    }
  }

  //get all answers
  const getAnswers = async () => {
    try {
      dispatch(onLoading(true))
      const { data } = await backendAPI.get('/report/getAnswers')
      dispatch(onSetAnswers(data))
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoading(false))
    }
  }

  //sort the answers by dateDay
  const sortAnswers = ({ type }) => {
    let sortedAnswers = []
    if (type === 'day') {
      sortedAnswers = [...answers].sort((a, b) => {
        return b.dateDay - a.dateDay
      })
    } else if (type === 'montn') {
      sortedAnswers = [...answers].sort((a, b) => {
        return b.dateMonth - a.dateMonth
      })
    } else if (type === 'year') {
      sortedAnswers = [...answers].sort((a, b) => {
        return b.dateYear - a.dateYear
      })
    }

    console.log('sortedAnswers ', sortedAnswers)
    //set answers to new sorted answers
    dispatch(onUpdateAnswer(sortedAnswers))
  }

  return {
    // properties
    questions,
    answers,
    // methods
    setQuestions,
    getAnswers,
    saveAnswer,
    sortAnswers,
  }
}
