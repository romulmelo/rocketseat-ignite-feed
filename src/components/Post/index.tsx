import Avatar from "../Avatar"
import Comment from "../Comment"

function Post() {
  return (
    <div className="flex flex-col gap-8 rounded-md bg-gray-2 p-10">
      <div className="flex-1">
        <header className="flex h-12 items-start">
          <div className="flex h-full flex-1 items-center gap-4">
            <Avatar
              src="https://images.unsplash.com/photo-1631680900243-3c207cf5a481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=56&h=56&q=95"
              alt="Profile picture - Jane Cooper"
            />
            <div className="flex flex-col">
              <strong className="text-base text-gray-7">Jane Cooper</strong>
              <span className="text-[0.875rem] text-gray-5">Dev Front-end</span>
            </div>
          </div>
          <div className="inline-block h-full">
            <time
              title="19 de Setembro às 15:00"
              dateTime="2022-09-19 15:00:30"
              className="cursor-default text-[0.875rem] text-gray-5"
            >
              Publicado há 1h
            </time>
          </div>
        </header>
        <div className="my-6 flex-1">
          <p className=" py-2.5 text-gray-6">
            Fala galeraa 👋
            <br />
            Acabei de subir mais um projeto no meu portifólio. É um projeto que
            fiz no NLW Return, evento da Rocketseat. O nome do projeto é
            DoctorCare 🚀
          </p>
          <p className="py-2.5">
            <a href="#" className="font-bold text-green-light">
              👉 jane.design/doctorcare
            </a>
          </p>
          <p className="py-2.5">
            <a href="#" className="mr-2.5 font-bold text-green-light">
              #novoprojeto
            </a>
            <a href="#" className="mr-2.5 font-bold text-green-light">
              #nlw
            </a>
            <a href="#" className="mr-2.5 font-bold text-green-light">
              #rocketseat
            </a>
          </p>
        </div>
        <footer className="border-t border-t-gray-3 pt-6">
          <span className="mb-4 block font-bold text-white">
            Deixe seu feedback
          </span>
          <form className="flex w-full flex-col gap-4">
            <textarea
              className="h-24 flex-1 resize-none rounded-md border border-gray-1 bg-gray-1 p-4 text-white placeholder:text-gray-4 focus:border-green-light focus:outline-none"
              placeholder="Escreva um comentário"
            />
            <button
              type="button"
              className="flex h-10 w-fit cursor-pointer items-center justify-center rounded-md bg-green-light py-1.5 px-4 font-bold text-white transition-colors hover:bg-green focus:bg-green"
            >
              Publicar
            </button>
          </form>
        </footer>
      </div>
      <Comment />
    </div>
  )
}

export default Post
