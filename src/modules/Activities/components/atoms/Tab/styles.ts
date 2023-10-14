import styled from '@emotion/native'

export const Container = styled.TouchableOpacity<{ isSelected: boolean }>(
  ({ theme, isSelected }) => ({
    backgroundColor: isSelected
      ? theme.colors.activitySecondary
      : 'transparent',
    padding: theme.sizes.xxs,
    margin: theme.sizes.xxxs,
    borderRadius: 10,
  }),
)
