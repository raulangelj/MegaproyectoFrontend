import React from 'react'
import { Modal as RNModal, ViewStyle } from 'react-native'
import { ModalBackground, ModalBtn, ModalContainer } from './styles'
import Text from '@components/atoms/Text'
import { Colors } from '@interfaces/themes'

export type ModalProps = {
  // children: React.ReactNode
  onClose?: () => void
  isVisible: boolean
  text: string
  children?: React.ReactNode
  textColor?: keyof Colors
  buttonTextColor?: keyof Colors
  buttonColor?: keyof Colors
  buttonText?: string
  style?: ViewStyle
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  isVisible,
  text,
  textColor,
  children,
  style,
  buttonColor,
  buttonTextColor,
  buttonText,
}) => {
  return (
    <RNModal
      animationType="slide"
      transparent
      visible={isVisible}
      onRequestClose={onClose}>
      <ModalBackground>
        <ModalContainer style={style}>
          <Text type="pLarge" color={textColor ?? 'error'}>
            {text}
          </Text>
          {children}
          {onClose && (
            <ModalBtn
              onPress={onClose}
              color={buttonColor ?? 'error'}
              text={buttonText ?? 'Close'}
              textColor={buttonTextColor ?? 'white'}
              borderRadius={10}
              size="medium"
              textType="buttonMedium"
            />
          )}
        </ModalContainer>
      </ModalBackground>
    </RNModal>
  )
}

export default Modal
