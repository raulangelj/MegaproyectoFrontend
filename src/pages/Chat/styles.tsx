import styled from '@emotion/native'

export type justifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined

export type flexDirection =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'
  | undefined

export type FlexAlignType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'

export type alignItems = 'center' | 'flex-start' | 'flex-end' | undefined

export interface ContainerProps {
  justifyContent?: justifyContent
  flexDirection?: flexDirection
  alignItems?: alignItems
  height?: string | number
  width?: string | number
  flex?: number
  alignSelf?: FlexAlignType | 'auto' | undefined
}

export interface InputProps {
  width?: string | number
}

export const Container = styled.View<ContainerProps>(
  ({
    theme,
    justifyContent,
    flexDirection,
    alignItems,
    height,
    width,
    flex,
  }) => ({
    flex: flex || 1,
    backgroundColor: theme.colors.background0,
    justifyContent: justifyContent || 'flex-start',
    flexDirection: flexDirection || 'column',
    alignItems: alignItems || 'flex-start',
    height: height || 'auto',
    width: width || 'auto',
  }),
)

export const Input = styled.TextInput<InputProps>(({ theme, width }) => ({
  backgroundColor: theme.colors.background1,
  width: width || '100%',
  // width: theme.sizes.xl * 10,
  height: theme.sizes.xl * 2,
  padding: theme.sizes.md,
}))

export const MessageBox = styled.View<ContainerProps>(
  ({ theme, justifyContent, flexDirection, alignItems, alignSelf }) => ({
    backgroundColor: theme.colors.background1,
    justifyContent: justifyContent || 'flex-start',
    flexDirection: flexDirection || 'column',
    alignItems: alignItems || 'flex-start',
    width: '80%',
    height: 'auto',
    padding: theme.sizes.sm,
    margin: theme.sizes.sm,
    alignSelf: alignSelf || 'auto',
  }),
)

export const MessageContainer = styled.ScrollView(({ theme }) => ({
  backgroundColor: theme.colors.background0,
  width: '100%',
  height: '70%',
  // padding: theme.sizes.sm,
  marginBottom: theme.sizes.md,
}))
