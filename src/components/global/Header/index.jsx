import IconIgniteSymbol from "@/components/icons/IconIgniteSymbol"
import styles from "./Header.module.scss"

function Header() {
  return (
    <header className={styles.container}>
      <IconIgniteSymbol size={48} />
      <h1 className={styles.title}>Ignite Feed</h1>
    </header>
  )
}

export default Header
