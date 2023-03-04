import styled from '@emotion/native'
import { ButtonProps } from '.'

export const ButtonWrapper = styled.TouchableOpacity<
  Pick<ButtonProps, 'type' | 'styles'>
>(({ theme, type }) => ({
  backgroundColor: theme.colors[type],
  width: '100%',
  padding: theme.sizes.md,
}))
