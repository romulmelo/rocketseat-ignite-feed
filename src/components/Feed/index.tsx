import { useEffect, useState } from "react"
import { axiosClient } from "../../shared/lib/axios"
import { PostModel } from "../../shared/model/post-model"
import Post from "../Post"

type RequestData = {
  posts: PostModel[]
}

function Feed() {
  const [posts, setPosts] = useState<PostModel[]>([])

  useEffect(() => {
    axiosClient.get<RequestData>("/posts").then((response) => {
      setPosts(response.data.posts)
    })
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
