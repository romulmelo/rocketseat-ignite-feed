import Feed from "./components/Feed"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <Header />
      <div
        id="content"
        className="mx-auto flex max-w-5xl flex-col gap-8 p-8 md:flex-row"
      >
        <Sidebar />
        <Feed />
      </div>
    </>
  )
}
export default App
