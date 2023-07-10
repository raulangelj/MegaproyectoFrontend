import Button from '@components/atoms/Button'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React from 'react'
import { Container } from './styles'
import Text from '@components/atoms/Text'

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
        onFocus={() => console.log('Focused!')}
      />
      <Text type="h1" color="foreground0">
        Hello
      </Text>
    </Container>
  )
}

export default Chat
