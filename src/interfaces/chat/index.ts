export interface ChatData {
  id: string
  name: string
  host_id: string
  messages: Message[]
}

export interface Message {
  _id: string
  author_id: string
  author_name: string
  content: string
  createdAt: Date
}
