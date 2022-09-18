import Logo from "../Logo"

function Header() {
  return (
    <header className="h-[6.25rem] bg-gray-2" role="banner">
      <div className="flex h-full items-center justify-center gap-4 py-7">
        <Logo />
        <h1 className="whitespace-nowrap text-2xl font-bold text-gray-6">
          Ignite Feed
        </h1>
      </div>
    </header>
  )
}

export default Header
