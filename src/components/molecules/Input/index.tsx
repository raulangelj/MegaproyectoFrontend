import React, { ComponentProps, ReactNode } from 'react'
import { TextInputProps } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { lightTheme } from '@themes/theme'
import Text from '@components/atoms/Text'
import { InputWrapper, LeftIcon, RightIcon, StyledInput } from './styles'

interface ExtraInputProps {
  label: ReactNode
  icon: ComponentProps<typeof MaterialCommunityIcons>['name']
  showLabel?: boolean
  isPassword?: boolean
}

export type InputProps = TextInputProps & ExtraInputProps

const Input: React.FC<InputProps> = ({
  label,
  icon,
  showLabel,
  isPassword,
  ...props
}) => {
  const [hasFocus, setHasFocus] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const onFocus = () => {
    setHasFocus(true)
  }

  const onBlur = () => {
    setHasFocus(false)
  }

  const onShowPassword = () => {
    setShowPassword(prev => !prev)
  }
  return (
    <InputWrapper>
      <LeftIcon>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color={lightTheme.colors.quinary}
        />
      </LeftIcon>
      {showLabel && <Text type="pSmall">{label}</Text>}
      <StyledInput
        {...props}
        hasFocus={hasFocus}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={isPassword && !showPassword}
      />
      {isPassword && (
        <RightIcon onPress={onShowPassword}>
          <MaterialCommunityIcons
            name={showPassword ? 'eye' : 'eye-off'}
            size={30}
            color="black"
          />
        </RightIcon>
      )}
    </InputWrapper>
  )
}

export default Input
