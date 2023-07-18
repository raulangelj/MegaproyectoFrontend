import React from 'react'
import Text from '../Text'
import { OrContainer, Stray } from './styles'

export const OrStray = () => {
  return (
    <OrContainer>
      <Stray />
      <Text type="pSmall">or</Text>
      <Stray />
    </OrContainer>
  )
}
