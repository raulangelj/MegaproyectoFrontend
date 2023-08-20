import styled from '@emotion/native'

export const Container = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background0,
}))

export const TopNavigation = styled.View(({ theme }) => ({
  width: '100%',
  paddingHorizontal: theme.sizes.sm,
}))
