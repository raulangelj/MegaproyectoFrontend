import styled from '@emotion/native'
import Background from '@modules/Activities/components/atoms/Background'

export const Container = styled(Background)(() => ({
  flex: 1,
  justifyContent: 'space-evenly',
  alignItems: 'center',
}))

export const ButtonWrapper = styled.View(({ theme }) => ({
  paddingTop: theme.sizes.lg,
  width: '90%',
}))
