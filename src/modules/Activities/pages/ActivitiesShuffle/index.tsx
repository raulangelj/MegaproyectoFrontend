import React, { useEffect, useState } from 'react'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import Background from '@modules/Activities/components/atoms/Background'
import Text from '@components/atoms/Text'
import { ScrollView, TouchableOpacity } from 'react-native'
import { activities as StaticActivities } from '../../mocks/activities'
import { LongCard, TextWrapper } from './styles'
import FloatButton from '@modules/Activities/components/atoms/FloatButton'
import BackNavigation from '@modules/Activities/components/molecules/BackNavigation'
import { Activity, DayTime } from '@modules/Activities/interfaces/activities'
import { getFirstThreeElements } from '@modules/Activities/utils/shuffleAlgorithm'
import { useAppSelector } from 'hooks/useAppSelector'

const ActivitiesShuffle: React.FC<
  RootStackScreenProps<'ActivitiesShuffle'>
> = ({ navigation }) => {
  const [activities, setActivities] = useState<Activity[]>([])
  const themeName = useAppSelector(state => state.theme.theme.name)
  const tags = useAppSelector(state => state.activities.tags)

  const shuffle = () => {
    let daytime: DayTime
    if (themeName === 'dark') {
      daytime = 'night'
    } else {
      daytime = 'day'
    }
    setActivities(getFirstThreeElements(StaticActivities, daytime, tags))
  }

  useEffect(() => {
    shuffle()
  }, [])

  return (
    <Background>
      <BackNavigation method={() => navigation.goBack()}>
        <TextWrapper type="h1" color="activityForeground0">
          {'Elige una actividad o '}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ActivitiesList')
            }}>
            <Text
              type="h1"
              color="activityTertiary"
              style={{
                textDecorationLine: 'underline',
              }}>
              {'ver todas'}
            </Text>
          </TouchableOpacity>
        </TextWrapper>
      </BackNavigation>
      <ScrollView>
        {activities.map(activity => {
          return (
            <LongCard
              onPress={() => {
                navigation.navigate(activity.route as any, {
                  activity: activity,
                })
              }}
              key={activity.key}
              activity={activity}
            />
          )
        })}
      </ScrollView>
      <FloatButton
        onPress={() => {
          shuffle()
        }}
      />
    </Background>
  )
}

export default ActivitiesShuffle
