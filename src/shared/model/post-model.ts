export type PostModel = {
  id: number
  author: PostAuthor
  content: PostContent[]
  tags: string[]
  publishedAt: Date
}

type PostAuthor = {
  avatarURL: string
  name: string
  role: string
}

type PostContent = {
  type: string
  value: string
}
