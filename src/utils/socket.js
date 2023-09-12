import { io } from 'socket.io-client'
import { getEnvVariables } from './getEnvVariables'

const socket = io.connect(getEnvVariables().API_URL)

export default socket
