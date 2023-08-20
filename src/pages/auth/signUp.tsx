import Text from '@components/atoms/Text'
import React, { useState } from 'react'
import {
  InputField,
  InputsContainer,
  ScrollView,
  SigUpButton,
  SignInScreen,
  UserCategoryDropDownListItems,
  UserCategoryDropdown,
} from './styles'

export const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  // dropwdown
  const [category, setCategory] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const onSignUp = () => {
    console.log('onSignUp, navitate to the home screen')
  }

  return (
    <ScrollView>
      <SignInScreen>
        <Text type="h1">Sign Up</Text>
        <InputsContainer>
          <InputField
            label="Name"
            icon="account"
            value={name}
            onChangeText={setName}
            placeholder="@johnDoe"
          />
          <InputField
            label="Email Address"
            icon="email-variant"
            value={email}
            onChangeText={setEmail}
            placeholder="johndoe@gmail.com"
            keyboardType="email-address"
          />
          <InputField
            label="Password"
            icon="lock"
            value={password}
            onChangeText={setPassword}
            placeholder="* * * * *"
            isPassword
          />
          <InputField
            label="Confirm Password"
            icon="lock"
            value={password2}
            onChangeText={setPassword2}
            placeholder="* * * * *"
            isPassword
          />
          <UserCategoryDropdown
            hasFocus={isOpen}
            open={isOpen}
            value={category}
            items={[
              { label: 'Psicologo', value: 'psicologo' },
              { label: 'Paciente', value: 'paciente' },
            ]}
            setOpen={setIsOpen}
            setValue={setCategory}
            dropDownContainerStyle={UserCategoryDropDownListItems}
          />
        </InputsContainer>
        <SigUpButton
          text="Sign Up"
          onPress={onSignUp}
          size="large"
          textType="buttonMedium"
          borderRadius={10}
        />
      </SignInScreen>
    </ScrollView>
  )
}
