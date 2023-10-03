import styled from '@emotion/native'

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.activityBackground0,
  justifyContent: 'space-evenly',
  alignItems: 'center',
}))

export const ButtonWrapper = styled.View(({ theme }) => ({
  paddingTop: theme.sizes.lg,
  width: '90%',
}))
