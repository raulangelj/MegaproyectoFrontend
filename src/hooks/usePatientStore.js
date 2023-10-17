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

  //getAnswers psychology side
  const getAnswersPatient = async id => {
    try {
      dispatch(onLoading(true))
      console.log('id ', id)
      const { data } = await backendAPI.get('/report/getAnswersPatient', {
        params: {
          id,
        },
      })
      dispatch(onSetAnswers(data))
    } catch (error) {
      console.log('error ', error)
    } finally {
      dispatch(onLoading(false))
    }
  }

  //sort the answers by dateDay
  const sortAnswers = ({ type, sorting }) => {
    let sortedAnswers = []
    if (type === 'day') {
      sortedAnswers = [...answers].sort((a, b) => {
        return sorting ? b.dateDay - a.dateDay : a.dateDay - b.dateDay
      })
    } else if (type === 'month') {
      sortedAnswers = [...answers].sort((a, b) => {
        return sorting ? b.dateMonth - a.dateMonth : a.dateMonth - b.dateMonth
      })
    } else if (type === 'year') {
      sortedAnswers = [...answers].sort((a, b) => {
        return sorting ? b.dateYear - a.dateYear : a.dateYear - b.dateYear
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
    getAnswersPatient,
  }
}
