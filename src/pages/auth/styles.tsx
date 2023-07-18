import Button from '@components/atoms/Button'
import Text from '@components/atoms/Text'
import Input from '@components/molecules/Input'
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
  paddingTop: theme.sizes.md,
  width: '100%',
}))

export const LoginSmallButtonsContainer = styled.View(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginVertical: theme.sizes.xxs,
}))

export const RememberMeContainer = styled.View(() => ({
  flexDirection: 'row',
  alignItems: 'center',
}))

export const ForgotPasswordButton = styled.Pressable(() => ({}))

export const SignInButtonContainer = styled.View(({ theme }) => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: theme.sizes.xs,
}))

export const SignInButton = styled(Button)(({ theme }) => ({
  padding: theme.sizes.xs,
}))

export const ForgotPasswordText = styled(Text)(() => ({
  color: 'grey',
}))

export const InputField = styled(Input)(() => ({
  marginBottom: 20,
}))

export const CreateAccountContainer = styled.View(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  // alignItems: 'center',
  width: '100%',
  marginVertical: theme.sizes.xl,
}))

export const CreateAccountBtn = styled.Pressable(() => ({
  marginLeft: 5,
}))
