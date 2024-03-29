import Text from '@components/atoms/Text'
import Background from '@modules/Activities/components/atoms/Background'
import BackNavigation from '@modules/Activities/components/molecules/BackNavigation'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import React, { useState } from 'react'
import { ButtonWrapper, Description, Input, LongCard } from './styles'
import Button from '@components/atoms/Button'
import { addProgress } from 'store/activities'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { ACTIVITY_PROGRESS } from '@modules/Activities/utils/constants'
import CompleteModal from '@modules/Activities/components/organisms/CompleteModal'

const Diario: React.FC<RootStackScreenProps<'Diario'>> = ({
  route: {
    params: { activity },
  },
  navigation,
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
      <Description type="pLarge" color="activityForeground0">
        {activity.shortDescription}
      </Description>
      <Input multiline />
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

export default Diario
