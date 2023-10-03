import React from 'react'
import { Container, ContentWrapper, SvgContainer } from './styles'
import DarkBackground from '@assets/images/dark_background.svg'
import DayBackground from '@assets/images/day_background.svg'
import { useAppSelector } from 'hooks/useAppSelector'
import { SafeAreaView } from 'react-native-safe-area-context'

const Background: React.FC<{ children?: React.ReactNode }> = props => {
  const themeName = useAppSelector(state => state.theme.theme.name)

  return (
    <Container>
      <SafeAreaView>
        <ContentWrapper>{props.children}</ContentWrapper>
      </SafeAreaView>
      <SvgContainer>
        {themeName === 'dark' ? <DarkBackground /> : <DayBackground />}
      </SvgContainer>
    </Container>
  )
}

export default Background
