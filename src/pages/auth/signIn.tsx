import React from 'react'
import { EmailPaswordContainer, SignInScreen } from './styles'
import Text from '@components/atoms/Text'
import Input from '@components/molecules/Input'

export const SignIn = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const InputStyles = {
    marginBottom: 20,
  }

  return (
    <SignInScreen>
      <Text type="h1">Sign In</Text>
      <EmailPaswordContainer>
        <Input
          showLabel
          label="Email Address"
          icon="email-variant"
          value={email}
          onChangeText={setEmail}
          placeholder="email@gmail.com"
          keyboardType="email-address"
          style={InputStyles}
        />
        <Input
          showLabel
          label="Password"
          icon="lock-open"
          value={password}
          onChangeText={setPassword}
          placeholder="* * * * * *"
          isPassword
          style={InputStyles}
        />
      </EmailPaswordContainer>
    </SignInScreen>
  )
}
