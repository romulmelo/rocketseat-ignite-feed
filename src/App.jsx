import Header from "@/components/global/Header"
import Sidebar from "@/components/global/Sidebar"
import Feed from "./components/global/Feed/index"
import Post from "@/components/global/Post"

import styles from "@/static/css/App.module.scss"

function App() {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <Sidebar />
        <main className={styles.container}>
          <Feed>
            <Post />
          </Feed>
        </main>
      </div>
    </>
  )
}

export default App
