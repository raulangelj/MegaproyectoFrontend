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

export const CardContainer = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
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
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.background0,
  borderRadius: 10,
  borderBottomColor: theme.colors.quaternary,
  borderBottomWidth: 3,
}))
