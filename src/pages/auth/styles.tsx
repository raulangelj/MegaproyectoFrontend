import styled from '@emotion/native'

export const SignInScreen = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background0,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingHorizontal: theme.sizes.md,
  paddingVertical: theme.sizes.lg,
}))

export const EmailPaswordContainer = styled.View(({ theme }) => ({
  paddingVertical: theme.sizes.md,
}))
