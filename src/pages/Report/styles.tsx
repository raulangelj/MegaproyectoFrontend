import styled from '@emotion/native'
//TODO
//Ask props , and FC or view? in Text

export const Container = styled.View(() => ({
  flex: 1,
}))

export const CardContainer = styled.View(() => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#95b8f6',
}))

export const ButtonsContainer = styled.View(() => ({
  flex: 0,
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
}))

export const ButtonsContainerInside = styled.View(() => ({
  flex: 1,
  flexDirection: 'column',
  width: '30%',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const TitleContainer = styled.View(() => ({
  flex: 0,
  width: '100%',
  alignItems: 'center',
  flexDirection: 'row',
  padding: 10,
  justifyContent: 'center',
}))

export const TextInput = styled.TextInput(() => ({
  height: '20%',
  width: '90%',
  borderRadius: 10,
  borderColor: 'black',
  borderWidth: 1,
}))

export const Text = styled.Text(() => ({
  flex: 1,
  color: 'black',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  alignItems: 'center',
}))

export const InputContainer = styled.View(() => ({
  flex: 1,
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const TextContainer = styled.View(() => ({
  flex: 1,
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}))
