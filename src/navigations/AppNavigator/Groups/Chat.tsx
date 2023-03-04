import React from 'react'
import { RootStack } from '@navigations/AppNavigator'
import Chat from '@pages/Chat'

export default () => (
  <RootStack.Group key="ChatGroup">
    <RootStack.Screen name="Chat" component={Chat} />
  </RootStack.Group>
)
