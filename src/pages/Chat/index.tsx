/* eslint-disable @typescript-eslint/no-unused-vars */
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  ChatScreen,
  MessageInput,
  MessageInputContainer,
  MessageSendPressable,
  MessageView,
} from './styles'
import { MockChatRoom } from '@static/mocks/ChatRoom'
import { FlatList, Text, View } from 'react-native'
import ChatMessage from '@components/molecules/ChatBubble'
import { MockHost } from '@static/mocks/User'
import { ChatData, Message } from '@interfaces/chat'
import socket from 'utils/socket'
import { useUserStore } from 'hooks'

const Chat: React.FC<RootStackScreenProps<'Chat'>> = () => {
  const { user, status } = useUserStore()
  const [actualUser, setActualUser] = useState(user)
  const [chatInfo, setChatInfo] = useState({} as ChatData)
  const [message, setMessage] = useState('')
  // const [chatMessages, setChatMessages] = React.useState(MockChatRoom)

  useEffect(() => {
    const roomId = user.category === 'patient' ? user.idPsychology : user.uid
    socket.emit('joinRoom', {
      room: roomId,
      user: actualUser,
    })
    return () => {
      socket.off('roomFound')
      socket.off('receiveMessage')
    }
  }, [])

  useLayoutEffect(() => {
    const roomId = user.category === 'patient' ? user.idPsychology : user.uid
    // Get all the messages at the beginning
    socket.emit('findRoom', roomId)
  }, [])

  // * This useEffect is for the chat messages
  useEffect(() => {
    socket.on('roomFound', (roomChats: ChatData) => {
      setChatInfo(roomChats)
    })
    socket.on('receiveMessage', (data: ChatData) => {
      setChatInfo(data)
    })
  }, [socket])

  const renderItems = ({ item }: { item: Message }) => {
    return (
      <ChatMessage
        item={item}
        isActualUser={item.author_id === actualUser.uid}
      />
    )
  }

  const onChangeText = (value: string) => {
    setMessage(value)
  }

  const onMessageSend = () => {
    const newMessage: Omit<Message, '_id' | 'createdAt'> = {
      author_id: actualUser.uid,
      author_name: actualUser.name,
      content: message,
    }
    socket.emit('newMessage', {
      room: chatInfo.host_id,
      message: newMessage,
    })
    console.log(newMessage)
    setMessage('')
  }

  return (
    <ChatScreen>
      <MessageView>
        {chatInfo?.messages?.length > 0 ? (
          <FlatList
            data={chatInfo.messages}
            renderItem={renderItems}
            keyExtractor={(item: Message) => item._id}
          />
        ) : (
          ''
        )}
      </MessageView>
      <MessageInputContainer>
        <MessageInput onChangeText={onChangeText} value={message} />
        <MessageSendPressable onPress={onMessageSend}>
          <FontAwesome name="send" size={20} color="#f2f0f1" />
        </MessageSendPressable>
      </MessageInputContainer>
    </ChatScreen>
  )
}

export default Chat
