import styled from '@emotion/native'

export const ChatScreen = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background0,
}))

export const MessageView = styled.View(({ theme }) => ({
  flex: 1,
  paddingVertical: theme.sizes.xxs,
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
  // height: theme.sizes.xxs, // ? This is not working, why?
  padding: theme.sizes.sm,
  flex: 1,
  marginRight: theme.sizes.xs,
  borderRadius: 20,
  color: 'black',
}))

export const MessageSendPressable = styled.Pressable(({ theme }) => ({
  alignSelf: 'center',
  // padding: theme.sizes.xxs,
  height: theme.sizes.xl,
  width: theme.sizes.xl,
  backgroundColor: theme.colors.quinary,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
}))

export const ModalBody = styled.ScrollView(({ theme }) => ({
  width: '100%',
  paddingVertical: theme.sizes.xs,
}))
