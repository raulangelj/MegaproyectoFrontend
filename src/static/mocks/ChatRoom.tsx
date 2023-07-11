import { ChatData } from '@interfaces/chat'

export const MockChatRoom: ChatData = {
  id: 'room_1',
  name: "Elisa's Chat",
  host_id: 'host_1',
  messages: [
    {
      id: 'message_1',
      author_id: 'host_1',
      author_name: 'Elisa',
      content: 'Hola, ¿cómo estás?',
      created_at: new Date(),
    },
    {
      id: 'message_2',
      author_id: 'user_1',
      author_name: 'Raul',
      content: 'Hola, bien y tú?',
      created_at: new Date(Date.now() + 10 * 60000),
    },
    {
      id: 'message_3',
      author_id: 'user_2',
      author_name: 'Donaldo',
      content: 'Bien bien ahi dandole',
      created_at: new Date(Date.now() + 20 * 60000),
    },
    {
      id: 'message_4',
      author_id: 'host_1',
      author_name: 'Elisa',
      content: '¿Qué tal tu día?',
      created_at: new Date(Date.now() + 30 * 60000),
    },
    {
      id: 'message_5',
      author_id: 'user_1',
      author_name: 'Raul',
      content: 'Bien, ¿y el tuyo?',
      created_at: new Date(Date.now() + 40 * 60000),
    },
    {
      id: 'message_6',
      author_id: 'user_2',
      author_name: 'Donaldo',
      content: 'Bien, bien, ahi dandole',
      created_at: new Date(Date.now() + 50 * 60000),
    },
    {
      id: 'message_7',
      author_id: 'host_1',
      author_name: 'Elisa',
      content: 'Genial! Me alegra mucho',
      created_at: new Date(Date.now() + 60 * 60000),
    },
  ],
}
