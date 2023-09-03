import React from 'react'
import { Modal as RNModal } from 'react-native'
import { ModalBackground, ModalBtn, ModalContainer } from './styles'
import Text from '@components/atoms/Text'

export type ModalProps = {
  // children: React.ReactNode
  onClose: () => void
  isVisible: boolean
  text: string
}

const Modal: React.FC<ModalProps> = ({ onClose, isVisible, text }) => {
  console.log('Modal', text)
  return (
    <RNModal
      animationType="slide"
      transparent
      visible={isVisible}
      onRequestClose={onClose}>
      <ModalBackground>
        <ModalContainer>
          <Text type="pLarge" color="error">
            {text}
          </Text>
          <ModalBtn
            onPress={onClose}
            color="error"
            text="Close"
            textColor="white"
            borderRadius={10}
            size="medium"
            textType="buttonMedium"
          />
        </ModalContainer>
      </ModalBackground>
    </RNModal>
  )
}

export default Modal
