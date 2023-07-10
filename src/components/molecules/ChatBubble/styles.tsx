import styled from '@emotion/native'
import { ChatMessageProps } from '.'
import Text from '@components/atoms/Text'

export const ChatBubbleContainer = styled.View<
  Pick<ChatMessageProps, 'isActualUser'>
>(({ theme, isActualUser }) => ({
  maxWidth: '50%',
  backgroundColor: isActualUser ? theme.colors.quinary : theme.colors.primary, // '#f5ccc2',
  padding: theme.sizes.sm, // ? should me dinamyc or 15?
  borderRadius: 10,
  marginBottom: theme.sizes.xxxs, // ? should me dinamyc or 2?
}))

export const ChatMessageContainer = styled.View<
  Pick<ChatMessageProps, 'isActualUser'>
>(({ isActualUser }) => ({
  flexDirection: isActualUser ? 'row-reverse' : 'row',
  // width: '100%',
  // alignItems: 'flex-end',
  alignItems: 'flex-end',
}))

export const ChatMessageWrapper = styled.View<
  Pick<ChatMessageProps, 'isActualUser'>
>(({ isActualUser }) => ({
  width: '100%',
  alignItems: isActualUser ? 'flex-end' : 'flex-start',
  marginBottom: 15,
}))

export const MessageTime = styled(Text)(({ theme }) => ({
  marginLeft: theme.sizes.xl,
  marginRight: theme.sizes.xl,
}))

export const MessageItems = styled.View(() => ({}))
