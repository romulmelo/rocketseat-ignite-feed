import styles from "./Form.module.scss"

function Form({ children }) {
  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <strong>Deixe seu feedback</strong>
      </div>
      <div>{children}</div>
    </form>
  )
}

export default Form
