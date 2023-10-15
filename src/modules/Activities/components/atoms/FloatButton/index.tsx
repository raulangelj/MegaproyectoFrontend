import React from 'react'
import { Container } from './styles'
import Shuffle from '@assets/images/shuffle.svg'

interface FloatButtonProps {
  onPress?: () => void
}

const FloatButton: React.FC<FloatButtonProps> = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Shuffle />
    </Container>
  )
}

export default FloatButton
