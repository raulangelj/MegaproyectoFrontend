import Button from '@components/atoms/Button'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React from 'react'
import { Container } from './styles'

const Chat: React.FC<RootStackScreenProps<'Chat'>> = () => {
  return (
    <Container>
      <Button type="primary" text="Hello" />
    </Container>
  )
}

export default Chat
