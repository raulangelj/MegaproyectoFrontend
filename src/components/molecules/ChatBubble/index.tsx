import React, { useMemo } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Text from '@components/atoms/Text'
import {
  ChatBubbleContainer,
  ChatMessageContainer,
  ChatMessageWrapper,
  MessageItems,
  MessageTime,
} from './styles'
import { Message } from '@interfaces/chat'

export interface ChatMessageProps {
  item: Message
  isActualUser?: boolean
}

const ChatMessage: React.FC<ChatMessageProps> = ({ item, isActualUser }) => {
  const { author_name: author, content: text, created_at } = item

  const formattedTime = useMemo(() => {
    const hours = created_at.getHours()
    const minutes = created_at.getMinutes()
    // Formatear la hora en HH:MM
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`
  }, [item])

  return (
    <MessageItems>
      <ChatMessageWrapper isActualUser={isActualUser}>
        <ChatMessageContainer isActualUser={isActualUser}>
          <Ionicons name="person-circle-sharp" size={30} color="black" />
          <ChatBubbleContainer isActualUser={isActualUser}>
            <Text type="pMediumBold">{author}</Text>
            <Text type="pMedium">{text}</Text>
          </ChatBubbleContainer>
        </ChatMessageContainer>
        <MessageTime type="pSmall">{formattedTime}</MessageTime>
      </ChatMessageWrapper>
    </MessageItems>
  )
}

export default ChatMessage
