import styled from '@emotion/native'

export const LeftIcon = styled.View(({ theme }) => ({
  position: 'absolute',
  top: 40,
  left: 15,
  // top: theme.sizes.lg,
  // left: theme.sizes.sm,
  zIndex: 1,
  borderRightWidth: 2,
  borderColor: theme.colors.quinary,
  paddingRight: theme.sizes.xxs,
}))

export const RightIcon = styled.Pressable(() => ({
  position: 'absolute',
  top: 40,
  right: 15,
  // top: theme.sizes.lg,
  // left: theme.sizes.sm,
  zIndex: 1,
}))

export const InputWrapper = styled.View(() => ({
  width: '100%',
  alignContent: 'center',
  // height: 'fit-content',
  // borderColor: theme.colors.quinary,
  // borderWidth: 2,
}))

export const StyledInput = styled.TextInput<{
  hasFocus: boolean
}>(({ theme, hasFocus }) => ({
  // backgroundColor: theme.colors.primary,
  height: 60,
  borderWidth: 2,
  borderRadius: 10,
  borderColor: theme.colors.quinary,
  marginVertical: theme.sizes.xxxs,
  marginBottom: theme.sizes.xs,
  padding: theme.sizes.sm,
  paddingLeft: theme.sizes.xxl,
  paddingRight: theme.sizes.xl,
  fontSize: theme.fontSizes.pLarge.fontSize,
  color: 'black',
  // focus
  ...(hasFocus && {
    backgroundColor: theme.colors.primary,
  }),
}))
