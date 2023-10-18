// import { API_URL } from '@env'

export const getEnvVariables = () => {
  // const env = process.env.NODE_ENV
  // if (env === 'development') {
  //   return {
  //     API_URL: 'http://localhost:5000',
  //   }
  // }
  // if (env === 'production') {
  //   return {
  //     // ! FALTA DEPLOYAR API
  //     API_URL: 'https://api.example.com',
  //   }
  // }
  // return {}
  return {
    API_URL: 'http://192.168.1.53:4000',
  }
}
