import Text from '@components/atoms/Text'
import React from 'react'
import { BotBtn, HeaderContainer } from './styles'
import BotIcon from '@assets/images/bot.svg'
export interface ChatHeaderProps {
  roomTitle: string
  onPress?: () => void
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ roomTitle, onPress }) => {
  return (
    <HeaderContainer>
      <Text type="pLargeBold">{roomTitle}</Text>
      <BotBtn onPress={onPress}>
        <BotIcon width={30} height={30} />
      </BotBtn>
    </HeaderContainer>
  )
}

export default ChatHeader
