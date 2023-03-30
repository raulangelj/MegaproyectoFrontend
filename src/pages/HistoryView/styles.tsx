import styled from '@emotion/native'

export const Text = styled.Text(() => ({
  flex: 1,
  color: 'black',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  alignItems: 'center',
}))

export const Container = styled.View(() => ({
  flex: 1,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
}))
