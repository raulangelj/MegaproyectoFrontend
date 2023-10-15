import Background from '@modules/Activities/components/atoms/Background'
import React from 'react'
import { ButtonWrapper, TagsContainer } from './styles'
import { Tags } from '@modules/Activities/mocks/tags'
import Tag from '@modules/Activities/components/atoms/Tag'
import Text from '@components/atoms/Text'
import { ScrollView } from 'react-native'
import Button from '@components/atoms/Button'
import { RootStackScreenProps } from '@navigations/types/ScreenProps'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { addTags } from 'store/activities'

const SelectPreffered: React.FC<RootStackScreenProps<'SelectPreffered'>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch()

  return (
    <Background>
      <Text
        type="h2"
        color="activityForeground0"
        style={{ textAlign: 'center' }}>
        Queremos hacer más personalizada tu experiencia, por favor ingresa lo
        que más te gusta
      </Text>
      <ScrollView>
        <TagsContainer>
          {Tags.map(tag => {
            return <Tag key={tag} name={tag} />
          })}
        </TagsContainer>
      </ScrollView>
      <ButtonWrapper>
        <Button
          onPress={() => {
            navigation.replace('ActivitiesShuffle')
            dispatch(addTags())
          }}
          text="Continuar"
          size="block"
          color="activitySecondary"
          textColor="activityForeground0"
          textType="buttonMedium"
          borderRadius={10}
        />
      </ButtonWrapper>
    </Background>
  )
}

export default SelectPreffered
