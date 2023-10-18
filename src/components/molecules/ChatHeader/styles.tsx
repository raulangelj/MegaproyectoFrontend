import styled from '@emotion/native'

export const HeaderContainer = styled.View(({ theme }) => ({
  width: '100%',
  padding: theme.sizes.xs,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

export const BotBtn = styled.TouchableOpacity(({ theme }) => ({
  backgroundColor: theme.colors.quinary,
  padding: theme.sizes.xxs,
  borderRadius: 10,
}))
