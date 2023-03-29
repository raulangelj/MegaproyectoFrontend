/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import Button from '@components/atoms/Button'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes'
import { Container, Input, MessageBox, MessageContainer } from './styles'

export interface UserModel {
  id: string
  name: string
  username: string
  email: string
  phone: string
}

export interface MessageModel {
  id: string
  text: string
  createdAt: Date
  user: UserModel
}

const UserPsicology: UserModel = {
  id: '0',
  name: 'Psicology',
  username: 'psicology',
  email: 'psicology@yopmail.com',
  phone: '1234567890',
}

const User1: UserModel = {
  id: '1',
  name: 'John Doe',
  username: 'johndoe',
  email: 'johndoe@yopmail.com',
  phone: '1234567890',
}

const User2: UserModel = {
  id: '2',
  name: 'Jane Doe',
  username: 'janedoe',
  email: 'janedoe@yopmail.com',
  phone: '1234567890',
}

const messages: MessageModel[] = [
  {
    id: '1',
    text: 'Hola! yo soy john',
    createdAt: new Date(),
    user: User1,
  },
  {
    id: '2',
    text: 'Hola! yo soy jane',
    createdAt: new Date(),
    user: User2,
  },
  {
    id: '3',
    text: 'como estan?',
    createdAt: new Date(),
    user: User1,
  },
]

const message1: MessageModel = {
  id: '1',
  text: 'No encuentro la motivación para hacer nada, todo me parece un esfuerzo demasiado grande.',
  createdAt: new Date(),
  user: User1,
}

const message2: MessageModel = {
  id: '2',
  text: 'Siento que todo lo que hago está mal y que nunca seré lo suficientemente bueno.',
  createdAt: new Date(),
  user: User2,
}

const message3: MessageModel = {
  id: '3',
  text: 'No tengo ganas de socializar ni de ver a nadie, solo quiero estar solo en mi habitación.',
  createdAt: new Date(),
  user: User1,
}

const message4: MessageModel = {
  id: '4',
  text: 'Me siento vacío por dentro y sin ningún propósito en la vida.',
  createdAt: new Date(),
  user: User2,
}

const message5: MessageModel = {
  id: '5',
  text: 'No puedo dejar de llorar y siento como si el dolor nunca fuera a desaparecer.',
  createdAt: new Date(),
  user: User1,
}

const newMessages: MessageModel[] = [
  message1,
  message2,
  message3,
  message4,
  message5,
]

const chatBotUser: UserModel = {
  id: '3',
  name: 'ChatBot - Solo tu puedes ver este mensaje',
  username: 'chatbot',
  email: '-',
  phone: '-',
}

const Chat: React.FC<RootStackScreenProps<'Chat'>> = () => {
  const [chatMessages, setChatMessages] = useState<MessageModel[]>(messages)
  const [user, setUser] = useState(UserPsicology)
  const [message, setMessage] = useState('')

  useEffect(() => {
    let counter = 0
    const newmessageinterval = setInterval(() => {
      console.log('newmessageinterval', counter)
      if (counter > newMessages.length - 2) {
        console.log('TERMINO')
        clearInterval(newmessageinterval)
      } else {
        console.log('newmessageinterval', newMessages[counter])
        // TODO: leer si es depresion o no del api
        const chatBotMessage: MessageModel = {
          id: '4',
          text: `Parece que ${newMessages[counter].user.name} muestra sintomas de depresion por su mensaje: "${newMessages[counter].text}"`,
          createdAt: new Date(),
          user: chatBotUser,
        }
        setChatMessages(oldMessages => [
          ...oldMessages,
          newMessages[counter],
          chatBotMessage,
        ])
        counter++
      }
    }, 20000)
  }, [])

  const onChangeText = (e: string) => {
    setMessage(e)
  }

  const sendMessage = () => {
    console.log('sendMessage', message)
    const newMessage: MessageModel = {
      id: '4',
      text: message,
      createdAt: new Date(),
      user: user,
    }
    setChatMessages(oldMessages => [...oldMessages, newMessage])
    setMessage('')
  }

  return (
    <Container justifyContent="space-between" flexDirection="column">
      {/* TODO: change to theme text */}
      <Text style={{ alignSelf: 'center', fontSize: 30 }}>Chat</Text>
      <MessageContainer>
        {chatMessages.map(({ id, text, user: userMessage }, index) => {
          return (
            <MessageBox
              key={index}
              alignSelf={
                userMessage.name === user.name ||
                userMessage.name === chatBotUser.name
                  ? 'flex-end'
                  : 'auto'
              }>
              <Text>{userMessage.name}</Text>
              <Text>{text}</Text>
            </MessageBox>
          )
        })}
      </MessageContainer>
      <Container
        justifyContent="flex-start"
        flexDirection="row"
        alignItems="flex-end">
        <Input
          placeholder="Input 2"
          width="70%"
          defaultValue={message}
          onChangeText={onChangeText}
        />
        <Button
          type="primary"
          text="Enviar"
          width="30%"
          onPress={sendMessage}
        />
      </Container>
    </Container>
  )
}

export default Chat
