import React from 'react'
import Modal from 'react-native-modal'
import { ButtonWrapper, Container, PaddingText } from './styles'
import { useTheme } from '@emotion/react'
import Trophy from '@assets/images/trophy.svg'
import Button from '@components/atoms/Button'
import { useNavigation } from '@react-navigation/native'
import { useAppSelector } from 'hooks/useAppSelector'

interface CompleteModalProps {
  isVisible: boolean
}
const CompleteModal: React.FC<CompleteModalProps> = ({ isVisible }) => {
  const theme = useTheme()
  const navigation = useNavigation()
  const message = useAppSelector(state => state.activities.messageToShow)

  return (
    <Modal
      backdropOpacity={0.9}
      useNativeDriverForBackdrop
      hideModalContentWhileAnimating
      isVisible={isVisible}
      useNativeDriver
      style={{ justifyContent: 'center', margin: 0, padding: theme.sizes.xs }}>
      <Container>
        <PaddingText type="h1" color="activityForeground0">
          ¡Felicidades!
        </PaddingText>
        <PaddingText type="h2" color="activityForeground0">
          {message}
        </PaddingText>
        <Trophy />
        <ButtonWrapper>
          <Button
            onPress={function (): void {
              navigation.goBack()
            }}
            text="Seguir"
            size="block"
            color="activitySecondary"
            textColor="activityForeground0"
            textType="buttonMedium"
            borderRadius={10}
          />
        </ButtonWrapper>
      </Container>
    </Modal>
  )
}

export default CompleteModal
