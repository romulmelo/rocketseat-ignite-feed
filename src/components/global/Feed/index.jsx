import styles from "./Feed.module.scss"

function Feed({ children }) {
  return <section className={styles.container}>{children}</section>
}

export default Feed
