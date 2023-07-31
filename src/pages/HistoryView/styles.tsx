import styled from '@emotion/native'

export const Text = styled.Text(() => ({
  flex: 1,
  color: 'black',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  alignItems: 'center',
}))

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.primary,
  alignItems: 'center',
}))

export const HeaderContainer = styled.View(({ theme }) => ({
  flex: 0,
  backgroundColor: theme.colors.primary,
  width: '100%',
  flexDirection: 'row',
  padding: 20,
}))

export const CardContainer = styled.View(({ theme }) => ({
  flex: 1,
  height: '70%',
  width: '80%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.background0,
  borderRadius: 10,
  marginBottom: 20,
}))
