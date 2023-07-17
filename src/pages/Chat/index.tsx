/* eslint-disable @typescript-eslint/no-unused-vars */
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React, { useState } from 'react'
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
import { Message } from '@interfaces/chat'

const Chat: React.FC<RootStackScreenProps<'Chat'>> = () => {
  const [actualUser, setActualUser] = useState(MockHost)
  const [chatInfo, setChatInfo] = useState(MockChatRoom)
  const [message, setMessage] = useState('')
  // const [chatMessages, setChatMessages] = React.useState(MockChatRoom)

  const renderItems = ({ item }: { item: Message }) => {
    return (
      <ChatMessage
        item={item}
        isActualUser={item.author_id === actualUser.id}
      />
    )
  }

  const onChangeText = (value: string) => {
    setMessage(value)
  }

  const onMessageSend = () => {
    const newMessage: Omit<Message, 'id'> = {
      author_id: actualUser.id,
      author_name: actualUser.name,
      content: message,
      created_at: new Date(),
    }
    console.log(newMessage)
  }

  return (
    <ChatScreen>
      <MessageView>
        {chatInfo.messages.length > 0 ? (
          <FlatList
            data={chatInfo.messages}
            renderItem={renderItems}
            keyExtractor={(item: Message) => item.id}
          />
        ) : (
          ''
        )}
      </MessageView>
      <MessageInputContainer>
        <MessageInput onChangeText={onChangeText} />
        <MessageSendPressable onPress={onMessageSend}>
          <FontAwesome name="send" size={20} color="#f2f0f1" />
        </MessageSendPressable>
      </MessageInputContainer>
    </ChatScreen>
  )
}

export default Chat
