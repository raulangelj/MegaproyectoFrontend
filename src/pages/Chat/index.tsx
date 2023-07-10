import Button from '@components/atoms/Button'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React from 'react'
import { Container } from './styles'
import Text from '@components/atoms/Text'
import ChatMessage from '@components/molecules/ChatBubble'

const Chat: React.FC<RootStackScreenProps<'Chat'>> = () => {
  return (
    <Container>
      <Text type="pLarge" color="foreground0">
        Chat
      </Text>
      <Button
        text="Press me!"
        color="primary"
        textType="buttonMedium"
        size="block"
        onPress={() => console.log('Pressed!')}
      />
      <Text type="h1" color="foreground0">
        Hello
      </Text>
      <ChatMessage author="OTRO" text="Este es un mensaje del usuario ACTUAL" />
      <ChatMessage
        author="Actual"
        text="Este es un mensaje de prubeeee"
        isActualUser
      />
      <ChatMessage author="OTRO" text="Este es un mensaje del usuario ACTUAL" />
      <ChatMessage
        author="Actual"
        text="Este es un mensaje de prubeeee"
        isActualUser
      />
    </Container>
  )
}

export default Chat
