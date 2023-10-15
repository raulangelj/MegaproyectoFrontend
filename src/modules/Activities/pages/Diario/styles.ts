import Text from '@components/atoms/Text'
import styled from '@emotion/native'
import ActivityLongCard from '@modules/Activities/components/molecules/ActivityLongCard'

export const LongCard = styled(ActivityLongCard)(({ theme }) => ({
  marginBottom: theme.sizes.md,
}))

export const ButtonWrapper = styled.View(({ theme }) => ({
  justifyContent: 'flex-end',
  width: '100%',
  paddingTop: theme.sizes.md,
}))

export const Input = styled.TextInput(({ theme }) => ({
  flex: 1,
  borderColor: theme.colors.activityForeground0,
  borderWidth: 2,
  borderRadius: 10,
  width: '100%',
  padding: theme.sizes.xs,
  color: theme.colors.activityForeground0,
}))

export const Description = styled(Text)(({ theme }) => ({
  paddingBottom: theme.sizes.xs,
}))
