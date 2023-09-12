export type UserCategory = 'phychology' | 'patient'

export interface UserInterface {
  uid: string
  email: string
  name: string
  category: UserCategory | undefined
  token: string
  tokenInitDate: Date | undefined
  idPsychology?: string
}
