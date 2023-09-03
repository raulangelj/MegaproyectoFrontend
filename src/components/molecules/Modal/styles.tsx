import Button from '@components/atoms/Button'
import styled from '@emotion/native'

export const ModalBackground = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.sizes.md,
}))

export const ModalContainer = styled.View(({ theme }) => ({
  margin: theme.sizes.md,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: theme.sizes.lg,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
}))

export const ModalBtn = styled(Button)(({ theme }) => ({
  marginTop: theme.sizes.md,
}))
