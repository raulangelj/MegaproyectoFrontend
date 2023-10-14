import styled from '@emotion/native'
import { scale } from '@themes/mixins'

export const Container = styled.TouchableOpacity<{
  backgroundColor: string
  flexDirection: 'row' | 'column'
}>(({ backgroundColor, theme, flexDirection }) => ({
  backgroundColor,
  width: '100%',
  overflow: 'hidden',
  padding: theme.sizes.xs,
  borderRadius: scale(10),
  flexDirection: flexDirection,
  minHeight: 160,
  gap: 5,
}))

export const ImageContainer = styled.View(() => ({
  width: '50%',
  justifyContent: 'center',
}))

export const TextContainer = styled.View(() => ({
  width: '50%',
  justifyContent: 'center',
  alignItems: 'center',
}))
