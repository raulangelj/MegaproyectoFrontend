import React from 'react'
import { Container, ContentWrapper, SvgContainer } from './styles'
import DarkBackground from '@assets/images/dark_background.svg'
import DayBackground from '@assets/images/day_background.svg'
import { useAppSelector } from 'hooks/useAppSelector'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleProp, ViewStyle } from 'react-native'

const Background: React.FC<{
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}> = props => {
  const themeName = useAppSelector(state => state.theme.theme.name)

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <ContentWrapper style={props.style}>{props.children}</ContentWrapper>
      </SafeAreaView>
      <SvgContainer>
        {themeName === 'dark' ? <DarkBackground /> : <DayBackground />}
      </SvgContainer>
    </Container>
  )
}

export default Background
