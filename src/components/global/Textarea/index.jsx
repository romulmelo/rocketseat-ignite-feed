import styles from "./Textarea.module.scss"

function Textarea() {
  return (
    <textarea
      className={styles.container}
      placeholder="Escreva um comentário..."
      resize={false}
    />
  )
}

export default Textarea
