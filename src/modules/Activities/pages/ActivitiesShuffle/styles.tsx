import Text from '@components/atoms/Text'
import styled from '@emotion/native'
import ActivityLongCard from '@modules/Activities/components/molecules/ActivityLongCard'

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.activityBackground0,
}))

export const TextWrapper = styled(Text)()

export const LongCard = styled(ActivityLongCard)(({ theme }) => ({
  marginBottom: theme.sizes.md,
}))
