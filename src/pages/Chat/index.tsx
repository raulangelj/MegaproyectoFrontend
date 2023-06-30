import Button from '@components/atoms/Button'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React from 'react'
import { Container } from './styles'
import Text from '@components/atoms/Text'

const Chat: React.FC<RootStackScreenProps<'Chat'>> = () => {
  return (
    <Container>
      <Button type="primary" text="Hello" />
      <Text type="pLarge" color="foreground0">
        Chat
      </Text>
    </Container>
  )
}

export default Chat
