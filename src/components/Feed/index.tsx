import { useEffect, useState } from "react"
import { PostModel } from "../../shared/model/post-model"
import Post from "../Post"

function Feed() {
  const [posts, setPosts] = useState<PostModel[]>([])

  async function fetchPosts() {
    const response = await fetch("http://localhost:5173/api/posts")
    const data = await response.json()
    setPosts(data.posts)
  }

  useEffect(() => {
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
