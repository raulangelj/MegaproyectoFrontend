export interface Question {
  id: number
  title: string
  description: string
  type: string
  options?: Array<string>
  answer: string
  isAnswered: boolean
  checkBoxOptions?: Array<any>
}
