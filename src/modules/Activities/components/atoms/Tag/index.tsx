import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import Text from '@components/atoms/Text'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { addTag, deleteTag } from 'store/activities'

interface TagProps {
  name: string
}
const Tag: React.FC<TagProps> = ({ name }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isSelected) {
      dispatch(addTag(name))
    } else {
      dispatch(deleteTag(name))
    }
  }, [isSelected])

  return (
    <Container
      isSelected={isSelected}
      onPress={() => {
        setIsSelected(!isSelected)
      }}>
      <Text color="activityForeground0" type="pMedium">
        {name}
      </Text>
    </Container>
  )
}

export default Tag
