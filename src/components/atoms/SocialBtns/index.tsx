import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SocialBtn, SocialBtnsContainer } from './styles'

export interface SocialBtnProps {
  onFacebookPress?: () => void
  onGooglePress?: () => void
  onTwitterPress?: () => void
}

export const SocialBtns: React.FC<SocialBtnProps> = ({
  onFacebookPress,
  onGooglePress,
  onTwitterPress,
}) => {
  return (
    <SocialBtnsContainer>
      <SocialBtn color="#3b5998" onPress={onFacebookPress}>
        <MaterialCommunityIcons name="facebook" size={30} color="white" />
      </SocialBtn>
      <SocialBtn color="#db4a39" onPress={onGooglePress}>
        <MaterialCommunityIcons name="google-plus" size={30} color="white" />
      </SocialBtn>
      <SocialBtn color="#00aced" onPress={onTwitterPress}>
        <MaterialCommunityIcons name="twitter" size={30} color="white" />
      </SocialBtn>
    </SocialBtnsContainer>
  )
}

export default SocialBtns
