import { createServer } from "miragejs"

export default function () {
  createServer({
    routes() {
      this.namespace = "api"

      this.get("/posts", () => {
        return {
          posts: [
            {
              id: 1,
              author: {
                avatarURL:
                  "https://images.unsplash.com/photo-1631680900243-3c207cf5a481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=56&h=56&q=95",
                name: "Jane Cooper",
                role: "Frontend Engineer"
              },
              content: [
                {
                  type: "paragraph",
                  value: "Fala galeraa 👋"
                },
                {
                  type: "paragraph",
                  value:
                    "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
                },
                {
                  type: "link",
                  value: "janecoopper.design/doctor-care"
                }
              ],
              comments: [],
              tags: [
                "novoprojeto",
                "nlw",
                "rocketseat",
                "front-end",
                "react",
                "typescript"
              ],
              publishedAt: "2022-09-19 15:00:30"
            }
          ]
        }
      })
    }
  })
}
