import Avatar from "@/components/global/Avatar"
import Form from "@/components/global/Form"
import Textarea from "@/components/global/Textarea"

import styles from "./Post.module.scss"

function Post() {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar
            src="https://images.unsplash.com/photo-1524159730786-4e74a1b78d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
            alt="Imagem de perfil"
            border={true}
          />
          <div className={styles.authorInfo}>
            <strong>Jane Cooper</strong>
            <span>Front-end Developer</span>
          </div>
        </div>
        <div className={styles.time}>
          <time
            title="17 de maio às 09:26"
            dateTime="2022-05-11 09:26:12"
          >
            Publicado há 1h
          </time>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          dolor itaque qui mollitia at aliquid nostrum atque vero debitis,
          tenetur repellat quisquam totam eius temporibus iusto illum hic a.
        </p>
        <p className={styles.references}>
          <a
            href="https://google.com"
            target="_blank"
          >
            Portifolio
          </a>
        </p>
        <p className={styles.hashtags}>
          <strong>
            <a href="#">#webdesing</a>
          </strong>
          <strong>
            <a href="#">#frontend</a>
          </strong>
        </p>
      </div>
      <Form>
        <Textarea />
      </Form>
    </article>
  )
}

export default Post
