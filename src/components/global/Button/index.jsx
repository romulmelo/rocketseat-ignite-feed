import "./Button.scss"

function Button({ children, type, variant }) {
  return (
    <button
      type={type}
      className={`button ${`button--${variant}`}`}
    >
      {children}
    </button>
  )
}

export default Button
