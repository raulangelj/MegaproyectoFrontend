import styled from '@emotion/native'
import { Colors } from '@interfaces/themes'

export type ButtonSize = 'small' | 'medium' | 'large' | 'block'

export const ButtonContainer = styled.View(() => ({
  alignItems: 'flex-start',
}))

export const ButtonWrapper = styled.TouchableOpacity<{
  color: keyof Colors | undefined
  borderRadius: number | undefined
  size: ButtonSize
}>(({ theme, color, borderRadius, size }) => {
  const paddingVerticalMapping: Record<ButtonSize, number> = {
    small: theme.sizes.xxs,
    medium: theme.sizes.xs,
    large: theme.sizes.sm,
    block: theme.sizes.sm,
  }
  const paddingHorizontalMapping: Record<ButtonSize, number> = {
    small: theme.sizes.sm,
    medium: theme.sizes.lg,
    large: theme.sizes.xxl,
    block: theme.sizes.xxl,
  }
  return {
    paddingVertical: paddingVerticalMapping[size],
    paddingHorizontal: paddingHorizontalMapping[size],
    width: size === 'block' ? '100%' : undefined,
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius ? borderRadius : 0,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: color ? theme.colors[color] : theme.colors.primary,
  }
})
