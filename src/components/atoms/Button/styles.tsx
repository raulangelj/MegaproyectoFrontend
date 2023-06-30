import styled from '@emotion/native'
import { ButtonProps } from '.'

export const ButtonWrapper = styled.TouchableOpacity<
  Pick<ButtonProps, 'type' | 'styles' | 'width' | 'borderRadius'>
>(({ theme, type, borderRadius, width }) => ({
  backgroundColor: theme.colors[type],
  width: width || '100%',
  borderRadius: borderRadius || 0,
  padding: theme.sizes.md,
}))
