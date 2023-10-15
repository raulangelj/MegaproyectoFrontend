import styled from '@emotion/native'

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.activityBackground0,
}))

export const ContentWrapper = styled.View(({ theme }) => ({
  flex: 1,
  paddingHorizontal: theme.sizes.xs,
}))

export const SvgContainer = styled.View({
  height: '100%',
  width: '100%',
  position: 'absolute',
  zIndex: -1,
  opacity: 0.6,
})
