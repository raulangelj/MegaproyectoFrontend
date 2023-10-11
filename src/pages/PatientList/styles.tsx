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

export const ScrollView = styled.ScrollView(({ theme }) => ({
  flex: 0,
  width: '100%',
  flexDirection: 'column',
  backgroundColor: theme.colors.primary,
}))

export const FlatList = styled.FlatList(({ theme }) => ({
  flex: 1,
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  alignContent: 'center',
  backgroundColor: theme.colors.primary,
}))

export const CardContainer = styled.View(() => ({
  flex: 0,
  width: '90%',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  marginBottom: 10,
  marginTop: 10,
}))

export const TitleContainer = styled.View(({ theme }) => ({
  flex: 0,
  height: '10%',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'row',
  padding: 10,
  justifyContent: 'space-between',
  backgroundColor: theme.colors.background0,
}))

export const CardTouchable = styled.TouchableOpacity(({ theme }) => ({
  flex: 1,
  margin: 10,
  padding: 10,
  width: '95%',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.secondary,
  borderRadius: 30,
}))

export const IconTouchable = styled.TouchableOpacity(() => ({
  flex: 0,
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center',
}))

export const ModalView = styled.View(({ theme }) => ({
  flex: 0,
  height: '80%',
  width: '90%',
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
  alignItems: 'center',
}))

export const ModalContainer = styled.View(({}) => ({
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const TextInput = styled.TextInput(({ theme }) => ({
  flex: 0,
  height: '10%',
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
  fontSize: 15,
  fontWeight: 'bold',
  textAlign: 'center',
  alignItems: 'center',
  textAlignVertical: 'center',
}))

export const EmptyContainer = styled.View(({ theme }) => ({
  flex: 1,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  backgroundColor: theme.colors.primary,
}))

export const ScrollView1 = styled.ScrollView(() => ({
  flexGrow: 1,
}))
