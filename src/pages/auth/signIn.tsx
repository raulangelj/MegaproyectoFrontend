import React from 'react'
import {
  EmailPaswordContainer,
  ForgotPasswordButton,
  LoginSmallButtonsContainer,
  SignInScreen,
  SignInButton,
  ForgotPasswordText,
  InputField,
  CreateAccountContainer,
  CreateAccountBtn,
} from './styles'
import Text from '@components/atoms/Text'
import { Checkbox } from 'native-base'
import { OrStray } from '@components/atoms/OrStray'
import SocialBtns from '@components/atoms/SocialBtns'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'

export const SignIn: React.FC<RootStackScreenProps<'SignIn'>> = ({
  navigation,
}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const onForgotPassword = () => {
    console.log('Forgot Password')
  }

  const onSignIn = () => {
    console.log('Sign In')
  }

  const onFacebookPress = () => {
    console.log('Facebook')
  }

  const onGooglePress = () => {
    console.log('Google')
  }

  const onTwitterPress = () => {
    console.log('Twitter')
  }
  const onCreateAccount = () => {
    navigation.navigate('SignUp')
  }

  return (
    <SignInScreen>
      <Text type="h1">Sign In</Text>
      <EmailPaswordContainer>
        <InputField
          showLabel
          label="Email Address"
          icon="email-variant"
          value={email}
          onChangeText={setEmail}
          placeholder="email@gmail.com"
          keyboardType="email-address"
        />
        <InputField
          showLabel
          label="Password"
          icon="lock-open"
          value={password}
          onChangeText={setPassword}
          placeholder="* * * * * *"
          isPassword
        />
        <LoginSmallButtonsContainer>
          <Checkbox value="rememberMe">
            <Text type="pSmall">Remember me</Text>
          </Checkbox>
          <ForgotPasswordButton onPress={onForgotPassword}>
            <ForgotPasswordText type="pSmall">
              Forgot Password?
            </ForgotPasswordText>
          </ForgotPasswordButton>
        </LoginSmallButtonsContainer>
        {/* NO ESTA JALANDO LOS ESTILOS ! falta un margen vertical */}
        <SignInButton
          textType="buttonMedium"
          size="block"
          onPress={onSignIn}
          text="Sign In"
          borderRadius={50}
        />
      </EmailPaswordContainer>
      <OrStray />
      <SocialBtns
        onFacebookPress={onFacebookPress}
        onGooglePress={onGooglePress}
        onTwitterPress={onTwitterPress}
      />
      <CreateAccountContainer>
        <Text type="pSmall">Don't have an account?</Text>
        <CreateAccountBtn onPress={onCreateAccount}>
          <Text type="pSmall" color="quinary">
            Create Account
          </Text>
        </CreateAccountBtn>
      </CreateAccountContainer>
    </SignInScreen>
  )
}
