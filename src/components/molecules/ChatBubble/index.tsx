import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Text from '@components/atoms/Text'
import {
  ChatBubbleContainer,
  ChatMessageContainer,
  ChatMessageWrapper,
  MessageItems,
  MessageTime,
} from './styles'

export interface ChatMessageProps {
  text: string
  author: string
  isActualUser?: boolean
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  text,
  author,
  isActualUser,
}) => {
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
        <MessageTime type="pSmall">08:50</MessageTime>
      </ChatMessageWrapper>
    </MessageItems>
  )
}

export default ChatMessage
