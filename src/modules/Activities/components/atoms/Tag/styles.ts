import styled from '@emotion/native'

export const Container = styled.TouchableOpacity<{ isSelected?: boolean }>(
  ({ theme, isSelected }) => ({
    backgroundColor: isSelected
      ? theme.colors.activityTertiary
      : theme.colors.activitySecondary,
    padding: theme.sizes.xxs,
    margin: theme.sizes.xxxs,
    borderRadius: 10,
  }),
)
