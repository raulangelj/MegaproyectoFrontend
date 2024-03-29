/* eslint-disable @typescript-eslint/no-unused-vars */
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  ChatScreen,
  MessageInput,
  MessageInputContainer,
  MessageSendPressable,
  MessageView,
  ModalBody,
} from './styles'
import { MockChatRoom } from '@static/mocks/ChatRoom'
import { FlatList, View, ViewStyle } from 'react-native'
import ChatMessage from '@components/molecules/ChatBubble'
import { MockHost } from '@static/mocks/User'
import { ChatData, Message } from '@interfaces/chat'
import socket from 'utils/socket'
import { useChat, useUserStore } from 'hooks'
import { UserInterface } from '@interfaces/user/user'
import ChatHeader from '@components/molecules/ChatHeader'
import Modal from '@components/molecules/Modal'
import Text from '@components/atoms/Text'

const filterChatMessages = (data: ChatData, user: UserInterface) => {
  const filterData = data.messages.filter(chatMessage => {
    // If the user is not a psychologist, then do not return messages from "bot"
    if (user.category === 'patient') {
      return chatMessage.author_name !== 'bot'
    } else {
      return chatMessage
    }
  })

  return { ...data, messages: filterData }
}

const Chat: React.FC<RootStackScreenProps<'Chat'>> = () => {
  const { user, status } = useUserStore()
  const { getBotMessages } = useChat()
  const [actualUser, setActualUser] = useState(user)
  const [chatInfo, setChatInfo] = useState({} as ChatData)
  const [message, setMessage] = useState('')
  const messagesContainer = useRef<FlatList>(null)
  const [botMessages, setBotMessages] = useState([] as Message[])
  const [showBotMessages, setShowBotMessages] = useState(false)
  // const [chatMessages, setChatMessages] = React.useState(MockChatRoom)

  const roomId = useMemo(() => {
    return user.category === 'patient' ? user.idPsychology : user.uid
  }, [user])

  useEffect(() => {
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
    // Get all the messages at the beginning
    socket.emit('findRoom', roomId)
  }, [])

  // * This useEffect is for the chat messages
  useEffect(() => {
    socket.on('roomFound', (roomChats: ChatData) => {
      setChatInfo(filterChatMessages(roomChats, user))
    })
    socket.on('receiveMessage', (data: ChatData) => {
      setChatInfo(filterChatMessages(data, user))
    })
  }, [socket])

  useEffect(() => {
    messagesContainer?.current?.scrollToEnd({ animated: true })
  }, [chatInfo])

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
    setMessage('')
  }

  const onPressBotMessage = async () => {
    const response = await getBotMessages(roomId)
    setBotMessages(response)
    setShowBotMessages(oldValue => !oldValue)
  }

  return (
    <ChatScreen>
      <ChatHeader roomTitle={chatInfo.name} onPress={onPressBotMessage} />
      <MessageView>
        {chatInfo?.messages?.length > 0 ? (
          <FlatList
            ref={messagesContainer}
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
      <Modal
        isVisible={showBotMessages}
        text={`Bot Message in ${chatInfo.name}`}
        textColor="background5"
        onClose={onPressBotMessage}
        buttonTextColor="foreground4"
        buttonColor="quinary"
        style={$modalContainer}>
        <ModalBody contentContainerStyle={$containerScroll}>
          {botMessages.length > 0 ? (
            botMessages.map((botMessage, index) => (
              <ChatMessage item={botMessage} key={index} isActualUser={false} />
            ))
          ) : (
            <Text type="pLarge">No messages</Text>
          )}
        </ModalBody>
      </Modal>
    </ChatScreen>
  )
}

export default Chat

const $modalContainer: ViewStyle = {
  width: '80%',
  height: '90%',
  backgroundColor: 'white',
  borderRadius: 20,
  overflow: 'hidden',
}

const $containerScroll: ViewStyle = {
  alignItems: 'flex-start',
}
