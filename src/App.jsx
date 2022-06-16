import Header from "@/components/global/Header"
import Sidebar from "@/components/global/Sidebar"

import styles from "@/static/css/App.module.scss"

function App() {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <Sidebar />
        <main className={styles.container}></main>
      </div>
    </>
  )
}

export default App
