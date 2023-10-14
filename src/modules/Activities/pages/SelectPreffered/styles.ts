import styled from '@emotion/native'

export const TagsContainer = styled.View(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  paddingTop: theme.sizes.md,
}))

export const ButtonWrapper = styled.View(({ theme }) => ({
  justifyContent: 'flex-end',
  width: '100%',
  paddingTop: theme.sizes.md,
  flex: 1,
}))
