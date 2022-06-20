import Avatar from "@/components/global/Avatar/"
import IconLike from "@/components/icons/IconLike/index"
import IconTrash from "@/components/icons/IconTrash/index"

import styles from "./Comment.module.scss"

function Comment() {
  return (
    <div className={styles.container}>
      <Avatar
        src="https://images.unsplash.com/photo-1630208232357-36479426fc24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
        alt="Imagem de perfil"
      />
      <div className={styles.content}>
        <div className={styles.comment}>
          <header className={styles.author}>
            <div>
              <strong>
                John Doe <span>(você)</span>
              </strong>
              <time>Cerca de 2h atrás</time>
            </div>
            <button
              type="button"
              aria-label="Deletar Comentario"
            >
              <IconTrash size={24} />
            </button>
          </header>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            reiciendis, rerum placeat.
          </p>
        </div>
        <footer className={styles.reactions}>
          <button type="button">
            <IconLike size={24} />
            <span>Aplaudir • 20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment
