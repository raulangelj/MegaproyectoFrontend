import Background from '@modules/Activities/components/atoms/Background'
import BackNavigation from '@modules/Activities/components/molecules/BackNavigation'
import CompleteModal from '@modules/Activities/components/organisms/CompleteModal'
import { ACTIVITY_PROGRESS } from '@modules/Activities/utils/constants'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import { useAppDispatch } from 'hooks/useAppDispatch'
import React, { useState } from 'react'
import { addProgress } from 'store/activities'
import { LongCard, ButtonWrapper } from './styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import Text from '@components/atoms/Text'
import Button from '@components/atoms/Button'

const Yoga: React.FC<RootStackScreenProps<'Yoga'>> = ({
  navigation,
  route: {
    params: { activity },
  },
}) => {
  const dispatch = useAppDispatch()
  const [isVisible, setIsVisible] = useState<boolean>(false)

  return (
    <Background>
      <BackNavigation
        method={() => {
          navigation.goBack()
        }}>
        <Text type="h2" color="activityForeground0">
          Haz elegido
        </Text>
      </BackNavigation>
      <LongCard
        onPress={() => {
          navigation.navigate(activity.route as any, {
            activity: activity,
          })
        }}
        key={activity.key}
        activity={activity}
      />
      <YoutubePlayer
        height={300}
        play
        videoId={'Nw2oBIrQGLo'}
        onChangeState={() => {}}
      />
      <ButtonWrapper>
        <Button
          onPress={function (): void {
            dispatch(addProgress(ACTIVITY_PROGRESS))
            setIsVisible(true)
          }}
          text="Finalizar"
          size="block"
          color="activitySecondary"
          textColor="activityForeground0"
          textType="buttonMedium"
          borderRadius={10}
        />
      </ButtonWrapper>
      <CompleteModal isVisible={isVisible} />
    </Background>
  )
}

export default Yoga
