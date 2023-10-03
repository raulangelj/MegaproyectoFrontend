import React from 'react'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import Background from '@modules/Activities/components/atoms/Background'
import Text from '@components/atoms/Text'
import { TouchableOpacity } from 'react-native'

const ActivitiesShuffle: React.FC<
  RootStackScreenProps<'ActivitiesShuffle'>
> = ({ navigation }) => {
  return (
    <Background>
      <Text type="h1" color="activityForeground0">
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
      </Text>
    </Background>
  )
}

export default ActivitiesShuffle
