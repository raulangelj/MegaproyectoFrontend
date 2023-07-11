import styled from '@emotion/native'

export const ChatScreen = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background0,
}))

export const MessageView = styled.View(({ theme }) => ({
  flex: 1,
  paddingVertical: theme.sizes.sm,
  paddingHorizontal: theme.sizes.xs,
}))

export const MessageInputContainer = styled.View(({ theme }) => ({
  width: '100%',
  backgroundColor: 'white',
  paddingVertical: theme.sizes.xs,
  paddingHorizontal: theme.sizes.sm,
  justifyContent: 'center',
  flexDirection: 'row',
}))

export const MessageInput = styled.TextInput(({ theme }) => ({
  borderWidth: 1,
  padding: theme.sizes.sm,
  flex: 1,
  marginRight: theme.sizes.xs,
  borderRadius: 20,
}))

export const MessageSendPressable = styled.Pressable(({ theme }) => ({
  width: '30%',
  backgroundColor: theme.colors.quinary,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
}))
