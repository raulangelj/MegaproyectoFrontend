import styled from '@emotion/native'

export const ButtonsContainer = styled.View(() => ({
  flex: 0,
  flexDirection: 'row',
  height: '10%',
  width: '100%',
  justifyContent: 'flex-start',
  backgroundColor: 'white',
}))

export const DownloadButton = styled.TouchableOpacity(({ theme }) => ({
  flex: 0,
  width: '50%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.quinary,
  margin: 5,
  padding: 10,
  borderRadius: 10,
}))

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: 'red',
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
}))

export const Text = styled.Text(() => ({
  flex: 1,
  color: 'white',
  fontSize: 15,
  fontWeight: 'bold',
  textAlign: 'center',
  alignItems: 'center',
  textAlignVertical: 'center',
}))

export const TextDownload = styled.Text(() => ({
  flex: 1,
  color: 'white',
  fontSize: 15,
  fontWeight: 'bold',
  textAlign: 'center',
  alignItems: 'center',
  textAlignVertical: 'center',
}))

export const Touchable = styled.TouchableOpacity(() => ({
  flex: 1,
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const ScrollView1 = styled.ScrollView(() => ({
  flexGrow: 1,
}))