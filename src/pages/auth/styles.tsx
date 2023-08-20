import Button from '@components/atoms/Button'
import Text from '@components/atoms/Text'
import Input from '@components/molecules/Input'
import styled from '@emotion/native'
import DropDownPicker from 'react-native-dropdown-picker'
import { lightTheme } from '@themes/theme'

export const ScrollView = styled.ScrollView(() => ({
  flexGrow: 1,
  overflow: 'hidden',
}))

export const SignInScreen = styled.View(({ theme }) => ({
  minHeight: '100%',
  margin: 0,
  backgroundColor: theme.colors.background0,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingHorizontal: theme.sizes.md,
  paddingVertical: theme.sizes.lg,
  borderColor: 'blue',
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
  padding: theme.sizes.sm,
  marginVertical: theme.sizes.xs,
}))

export const ForgotPasswordText = styled(Text)(() => ({
  color: 'grey',
}))

export const InputField = styled(Input)(() => ({
  marginBottom: 20,
}))

export const CreateAccountContainer = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  width: '100%',
  marginBottom: theme.sizes.lg,
}))

export const CreateAccountBtn = styled.Pressable(() => ({
  marginLeft: 5,
}))

export const InputsContainer = styled.View(({ theme }) => ({
  width: '100%',
  marginTop: theme.sizes.md,
}))

export const UserCategoryDropdown = styled(DropDownPicker)<{
  hasFocus: boolean
}>(({ theme, hasFocus }) => ({
  height: 60,
  borderWidth: 2,
  borderRadius: 10,
  borderColor: theme.colors.quinary,
  marginVertical: theme.sizes.xxxs,
  marginBottom: theme.sizes.xs,
  padding: theme.sizes.sm,
  fontSize: theme.fontSizes.pLarge.fontSize,
  color: 'black',
  // focus
  ...(hasFocus && {
    backgroundColor: theme.colors.primary,
  }),
}))

export const UserCategoryDropDownListItems = {
  borderColor: lightTheme.colors.quinary,
  borderWidth: 2,
}

export const SigUpButton = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-end',
  marginVertical: theme.sizes.md,
}))
