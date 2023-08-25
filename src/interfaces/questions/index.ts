export interface Question {
  id: string
  question: string
  type: string
  options?: Array<string>
  answer: Array<string>
  isAnswered: boolean
  checkBoxOptions?: Array<any>
}
