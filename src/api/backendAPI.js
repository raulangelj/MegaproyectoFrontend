import axios from 'axios'
import { getEnvVariables } from 'utils'
import { store } from '../store'

const { API_URL } = getEnvVariables()

// Create a function to get the token from the Redux store
const getTokenFromStore = () => {
  const userState = store.getState().user
  return userState.user ? userState.user.token : null
}

// Create an Axios instance with dynamic headers
const backendAPI = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Allow-Cross-Origin': '*',
  },
})

// Add an interceptor to update the headers before each request
backendAPI.interceptors.request.use(
  config => {
    // Get the token from the Redux store
    const token = getTokenFromStore()

    // Set the 'x-token' header with the token, if available
    if (token) {
      config.headers['x-token'] = token
    }

    return config
  },
  error => Promise.reject(error),
)

export default backendAPI
