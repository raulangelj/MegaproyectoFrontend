import Text from '@components/atoms/Text'
import styled from '@emotion/native'

export const Container = styled.View(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.colors.activityBackground0,
  padding: theme.sizes.sm,
  alignItems: 'center',
}))

export const PaddingText = styled(Text)(({ theme }) => ({
  paddingBottom: theme.sizes.xs,
  textAlign: 'center',
}))

export const ButtonWrapper = styled.View(({ theme }) => ({
  justifyContent: 'flex-end',
  width: '100%',
  paddingTop: theme.sizes.md,
}))
