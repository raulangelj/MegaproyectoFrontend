import axios from 'axios'
import { getEnvVariables } from 'utils'

const { API_URL } = getEnvVariables()

const backendAPI = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Allow-Cross-Origin': '*',
    'x-token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NGRmYzExOTllNWJlYmI3YjJlZWRjOGEiLCJuYW1lIjoiQnJ5YW5uIFBzaWNvbG9nbyIsImlhdCI6MTY5NTQwODE2MywiZXhwIjoxNjk1NDE1MzYzfQ.3ykNUtJdpvKZShsnWFLcgpLlTr6-HxECEiMVXFtt3Ys',
  },
})

export default backendAPI
