import styled from '@emotion/native'

export const Container = styled.View(({}) => ({
  flex: 1,
  backgroundColor: '#95b8f6',
  justifyContent: 'flex-start',
  alignItems: 'center',
}))

export const HistoryBlock = styled.TouchableOpacity(({ theme }) => ({
  flex: 0,
  flexDirection: 'row',
  width: '80%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.background1,
  backgroundColor: 'white',
  marginVertical: 10,
  borderRadius: 10,
}))

export const Text = styled.Text(() => ({
  flex: 1,
  color: 'black',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  alignItems: 'center',
}))

export const ButtonsContainer = styled.View(() => ({
  flex: 0,
  flexDirection: 'row',
  height: '10%',
  width: '100%',
  justifyContent: 'space-between',
  backgroundColor: 'white',
}))

export const DownloadButton = styled.TouchableOpacity(({ theme }) => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.buttonColor0,
  margin: 10,
  borderRadius: 10,
}))
