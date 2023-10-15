import styled from '@emotion/native'

export const Container = styled.TouchableOpacity(({ theme }) => ({
  borderRadius: 50,
  padding: theme.sizes.sm,
  backgroundColor: theme.colors.activitySecondary,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
}))
