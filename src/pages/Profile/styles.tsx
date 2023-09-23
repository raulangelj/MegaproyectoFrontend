import styled from '@emotion/native'
//TODO
//Ask props , and FC or view? in Text

export const Container = styled.View(({ theme }) => ({
  flex: 0,
  backgroundColor: theme.colors.background0,
  alignItems: 'center',
  width: '100%',
}))

export const MainContainer = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background0,
  alignItems: 'center',
  width: '100%',
  height: '100%',
}))

export const ButtonsContainer = styled.View(({ theme }) => ({
  flex: 0,
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '30%',
  padding: 10,
}))
