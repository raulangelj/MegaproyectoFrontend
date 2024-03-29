import React, { useEffect } from 'react'
import {
  EmailPaswordContainer,
  LoginSmallButtonsContainer,
  SignInScreen,
  SignInButton,
  InputField,
  ScrollView,
} from './styles'
import Text from '@components/atoms/Text'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import { useUserStore } from 'hooks'
import Modal from '@components/molecules/Modal'

export const SignIn: React.FC<RootStackScreenProps<'SignIn'>> = () => {
  const { startLogin, errorMessage } = useUserStore()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [modalConfig, setModalConfig] = React.useState({
    isVisible: false,
    text: '',
  })

  // const onForgotPassword = () => {
  //   console.log('Forgot Password')
  // }

  useEffect(() => {
    if (errorMessage !== undefined) {
      setModalConfig({
        isVisible: true,
        text: errorMessage,
      })
    }
  }, [errorMessage])

  const onSignIn = () => {
    console.log('Sign In')
    if (email === '' || password === '') {
      setModalConfig({
        isVisible: true,
        text: 'Please enter your email and password',
      })
      return
    }
    startLogin({
      userEmail: email,
      password,
    })
  }

  const onClose = () => {
    setModalConfig({
      isVisible: false,
      text: '',
    })
  }

  // const onFacebookPress = () => {
  //   console.log('Facebook')
  // }

  // const onGooglePress = () => {
  //   console.log('Google')
  // }

  // const onTwitterPress = () => {
  //   console.log('Twitter')
  // }
  // const onCreateAccount = () => {
  //   navigation.navigate('SignUp')
  // }

  return (
    <ScrollView>
      <SignInScreen>
        <Text type="h1">Sign In</Text>
        <EmailPaswordContainer>
          <InputField
            label="Email Address"
            icon="email-variant"
            value={email}
            onChangeText={setEmail}
            placeholder="email@gmail.com"
            keyboardType="email-address"
          />
          <InputField
            label="Password"
            icon="lock-open"
            value={password}
            onChangeText={setPassword}
            placeholder="* * * * * *"
            isPassword
          />
          <LoginSmallButtonsContainer>
            {/* <Checkbox value="rememberMe">
              <Text type="pSmall">Remember me</Text>
            </Checkbox> */}
            {/* <ForgotPasswordButton onPress={onForgotPassword}>
              <ForgotPasswordText type="pSmall">
              Forgot Password?
              </ForgotPasswordText>
            </ForgotPasswordButton> */}
          </LoginSmallButtonsContainer>
          <SignInButton
            textType="buttonMedium"
            size="block"
            onPress={onSignIn}
            text="Sign In"
            borderRadius={50}
          />
        </EmailPaswordContainer>
        {/* <OrStray />
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
        </CreateAccountContainer> */}
        <Modal
          onClose={onClose}
          isVisible={modalConfig.isVisible}
          text={modalConfig.text}
        />
      </SignInScreen>
    </ScrollView>
  )
}
