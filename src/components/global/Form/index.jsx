import styles from "./Form.module.scss"

function Form({ children, ...props }) {
  return (
    <form
      className={styles.form}
      {...props}
    >
      <div className={styles.header}>
        <strong>Deixe seu feedback</strong>
      </div>
      <div className={styles.content}>{children}</div>
    </form>
  )
}

export default Form
