import Avatar from "../Avatar"

function Sidebar() {
  return (
    <aside className="h-min flex-1 rounded-md bg-gray-2 px-8 md:sticky md:top-8 md:max-w-[16rem]">
      <div className="flex items-center justify-center gap-6 py-8 md:flex-col">
        <Avatar
          src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=56&h=56&q=80"
          alt="Profile picture - Lesli Alexander"
        />
        <div className="flex flex-col md:items-center">
          <strong className="text-base font-bold text-white">
            Leslie Alexander
          </strong>
          <span className="text-[0.875rem] text-gray-5">UI Designer</span>
        </div>
      </div>
      <div className="flex flex-col pb-8">
        <a
          href="#"
          className="flex items-center justify-center rounded-md border border-green-light px-4 py-1.5 font-bold text-green-light transition-colors hover:bg-green-light hover:text-white"
        >
          Editar seu perfil
        </a>
      </div>
    </aside>
  )
}

export default Sidebar
