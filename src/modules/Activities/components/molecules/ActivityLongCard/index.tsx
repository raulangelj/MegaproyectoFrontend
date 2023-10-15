import { Activity } from '@modules/Activities/interfaces/activities'
import React from 'react'
import { Container, ImageContainer, TextContainer } from './styles'
import Text from '@components/atoms/Text'
import { StyleProp, ViewStyle } from 'react-native'

interface ActivityLongCardProps {
  activity: Activity
  flexDirection?: 'row' | 'column'
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const ActivityLongCard: React.FC<ActivityLongCardProps> = ({
  activity,
  style,
  flexDirection = 'row',
  onPress,
}) => {
  return (
    <Container
      style={style}
      flexDirection={flexDirection}
      backgroundColor={activity.cardColor}
      onPress={onPress}
      activeOpacity={0.8}>
      <ImageContainer
        style={{ width: flexDirection === 'column' ? '100%' : '50%' }}>
        <activity.image />
      </ImageContainer>
      <TextContainer
        style={{ width: flexDirection === 'column' ? '100%' : '50%' }}>
        <Text
          type="h2"
          color="activityForeground0"
          style={{ textAlign: 'center' }}>
          {activity.name}
        </Text>
      </TextContainer>
    </Container>
  )
}

export default ActivityLongCard
