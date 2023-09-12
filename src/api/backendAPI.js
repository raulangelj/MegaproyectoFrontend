import axios from 'axios'
import { getEnvVariables } from 'utils'

const { API_URL } = getEnvVariables()

const backendAPI = axios.create({
  baseURL: `${API_URL}/api`,
})

export default backendAPI
