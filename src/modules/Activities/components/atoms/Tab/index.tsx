import React from 'react'
import { Container } from './styles'
import Text from '@components/atoms/Text'

export interface TabProps {
  id: string
  name: string
  selectedId: string
  onPress?: (id: string) => void
}

const Tab: React.FC<TabProps> = ({ id, onPress, name, selectedId }) => {
  return (
    <Container isSelected={selectedId === id} onPress={() => onPress?.(id)}>
      <Text color="activityForeground0" type="pLargeBold">
        {name}
      </Text>
    </Container>
  )
}

export default Tab
