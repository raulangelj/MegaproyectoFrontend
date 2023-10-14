import styled from '@emotion/native'
import ActivityLongCard from '@modules/Activities/components/molecules/ActivityLongCard'

export const LongCard = styled(ActivityLongCard)(({ theme }) => ({
  marginBottom: theme.sizes.md,
}))

export const ButtonWrapper = styled.View(({ theme }) => ({
  justifyContent: 'flex-end',
  width: '100%',
  paddingTop: theme.sizes.md,
  flex: 1,
}))

export const TextContainer = styled.View(({ theme }) => ({
  borderColor: theme.colors.activityForeground0,
  borderWidth: 2,
  borderRadius: 10,
  width: '100%',
  padding: theme.sizes.lg,
  color: theme.colors.activityForeground0,
  justifyContent: 'center',
  alignItems: 'center',
}))
