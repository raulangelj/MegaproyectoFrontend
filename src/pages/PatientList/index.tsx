import { PsychologyTabsScreenProps } from '@navigations/types/ScreenProps'
import {
  FlatList,
  TitleContainer,
  CardTouchable,
} from '@pages/PatientList/styles'
import Text from '@components/atoms/Text'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { usePsychologyStore } from 'hooks'

const PatientList: React.FC<PsychologyTabsScreenProps<'PatientList'>> = () => {
  const { patients, setPatients } = usePsychologyStore()

  useFocusEffect(
    React.useCallback(() => {
      setPatients()
    }, []),
  )

  return (
    <>
      <TitleContainer>
        <Text type="pLarge" color="quaternary">
          Lista de pacientes
        </Text>
        <Feather name="user-plus" size={20} color="black" />
      </TitleContainer>
      <FlatList
        data={patients}
        renderItem={({ item }: { item: any }) => (
          <CardTouchable>
            <FontAwesome name="user-circle" size={20} color="black" />
            <Text type="pLarge">{item.name}</Text>
            <Text type="pLarge">{item.category}</Text>
            <Text type="pLarge">{item.email}</Text>
          </CardTouchable>
        )}
      />
    </>
  )
}

export default PatientList
