import "./Button.scss"

function Button({ children, variant, ...props }) {
  return (
    <button
      className={`button ${`button--${variant}`}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
