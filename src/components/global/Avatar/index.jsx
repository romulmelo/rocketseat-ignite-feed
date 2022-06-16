import styles from "./Avatar.module.scss"

function Avatar({ src, alt, border }) {
  return (
    <div className={styles.container}>
      <img
        className={border ? styles.avatarOutline : styles.avatar}
        src={src}
        alt={alt}
      />
    </div>
  )
}

export default Avatar
