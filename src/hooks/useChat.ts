import { backendAPI } from 'api'

export const useChat = () => {
  const getBotMessages = async (roomId: string) => {
    try {
      const response = await backendAPI.post('/chat/botMessages', {
        host_id: roomId,
      })
      return response.data.messages
    } catch (error) {
      console.error('error ', error)
      return []
    }
  }
  return {
    getBotMessages,
  }
}
