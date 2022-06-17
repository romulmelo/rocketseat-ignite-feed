import styles from "./Textarea.module.scss"

function Textarea(props) {
  return (
    <textarea
      className={styles.container}
      placeholder="Escreva um comentário..."
      {...props}
    />
  )
}

export default Textarea
