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
  width: '70%',
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
  fontSize: 15,
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
  backgroundColor: theme.colors.tertiary,
  margin: 10,
  padding: 10,
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

export const ReportContainer = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background0,
  justifyContent: 'center',
  alignItems: 'center',
}))
