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
  // const [chatMessages, setChatMessages] = React.useState(MockChatRoom)

  const renderItems = ({ item }: { item: Message }) => {
    return (
      <ChatMessage
        text={item.content}
        author={item.author_name}
        isActualUser={item.author_id === actualUser.id}
      />
    )
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
        <MessageInput />
        <MessageSendPressable>
          <FontAwesome name="send" size={20} color="#f2f0f1" />
          {/* <Text style={{ color: '#f2f0f1', fontSize: 20 }}>SEND</Text> */}
        </MessageSendPressable>
      </MessageInputContainer>
    </ChatScreen>
  )
}

export default Chat
