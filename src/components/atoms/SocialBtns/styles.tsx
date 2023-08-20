import styled from '@emotion/native'

export const SocialBtnsContainer = styled.View(() => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginVertical: 20,
}))

export const SocialBtn = styled.Pressable<{
  color: string
}>(({ color }) => ({
  backgroundColor: color,
  borderRadius: 50,
  padding: 8,
  marginHorizontal: 10,
}))
