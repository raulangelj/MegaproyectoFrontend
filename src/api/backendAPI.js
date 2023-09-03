import axios from 'axios'
import { getEnvVariables } from 'utils'

const { API_URL } = getEnvVariables()

const backendAPI = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Allow-Cross-Origin': '*',
    'x-token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NGU0ZmIyNzNmM2JkYmQ5NDk5OTc5MDQiLCJuYW1lIjoiUGVkcm8gcGFjaWVudGUiLCJpYXQiOjE2OTM2OTg2MTYsImV4cCI6MTY5MzcwNTgxNn0.er0-dKDSAf9cCnRMuPpWwIXw_j6xnwObyokdEArZi00',
  },
})

export default backendAPI
