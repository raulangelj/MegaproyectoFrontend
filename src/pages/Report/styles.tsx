import styled from '@emotion/native'
//TODO
//Ask props , and FC or view? in Text


export const Container = styled.View(({ theme }) => ({
  flex: 0,
  backgroundColor: theme.colors.background0,
  alignItems: 'center',
  width: '100%',
  height: '100%',
  borderRadius: 10,
}))

export const ButtonsContainer = styled.View(() => ({
  flex: 1,
  width: '100%',
  flexDirection: 'row',
  padding: 10,
  justifyContent: 'space-between',
}))

export const ButtonsContainerInside = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  borderRadius: 10,
  shadowColor: 'black',
  backgroundColor: theme.colors.background0,
}))

export const TitleContainer = styled.View(({ theme }) => ({
  flex: 0,
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  padding: 10,
  justifyContent: 'center',
  backgroundColor: theme.colors.primary,
}))

export const CardContainer = styled.View(() => ({
  flex: 0,
  height: '70%',
  width: '80%',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const SkipPressable = styled.Pressable(({ theme }) => ({
  flex: 0,
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.quinary,
  borderRadius: 50,
}))

export const MicPressable = styled.Pressable(({ theme }) => ({
  flex: 0,
  padding: 20,
  marginTop: 10,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.quinary,
  borderRadius: 50,
}))

export const TextInput = styled.TextInput(({ theme }) => ({
  height: '40%',
  width: '90%',
  borderRadius: 10,
  backgroundColor: 'white',
  borderColor: theme.colors.background4,
  borderWidth: 2,
  color: 'black',
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
  width: '100%',
  backgroundColor: 'red',
  borderColor: 'red',
  borderWidth: 2,
}))

export const TextContainer = styled.View(() => ({
  flex: 0,
  height: '30%',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const KeyBoardAvoidingView = styled.KeyboardAvoidingView(() => ({
  flex: 1,
}))

export const ScrollView = styled.ScrollView(({ theme }) => ({
  flex: 0,
  width: '100%',
  flexDirection: 'column',
  backgroundColor: theme.colors.primary,
}))

export const SliderContainer = styled.View(({ theme }) => ({
  flex: 1,
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.background0,
  borderRadius: 10,
}))

export const Touchable = styled.TouchableOpacity(() => ({
  flex: 1,
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const ModalView = styled.View(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: '50%',
  backgroundColor: theme.colors.background1,
  borderRadius: 20,
  padding: 35,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
}))

export const ModalContainer = styled.View(({}) => ({
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
}))