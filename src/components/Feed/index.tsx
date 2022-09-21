import { useEffect, useState } from "react"
import Post from "../Post"

interface Post {
  id: number
  author: {
    avatarURL: string
    name: string
    role: string
  }
  content: [{ type: string; value: string }]
  tags: string[]
  publishedAt: Date
}

function Feed() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:3000/posts")
      const data = await response.json()

      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <main className="flex flex-1 flex-col gap-8">
      {posts.map((post) => {
        return <Post key={post.id} {...post} />
      })}
    </main>
  )
}

export default Feed
