import React from 'react'
import { TouchableOpacity } from 'react-native'
import LandingIcon from '@assets/images/back_button.svg'
import { TopNavigation } from './styles'

interface BackNavigationProps {
  method: () => void
  children?: React.ReactNode
}
const BackNavigation: React.FC<BackNavigationProps> = ({
  method,
  children,
}) => {
  return (
    <TopNavigation>
      <TouchableOpacity onPress={method} style={{ paddingRight: 10 }}>
        <LandingIcon height={24} width={17} />
      </TouchableOpacity>
      {children}
    </TopNavigation>
  )
}

export default BackNavigation
