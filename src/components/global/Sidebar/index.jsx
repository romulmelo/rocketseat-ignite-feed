import Avatar from "@/components/global/Avatar/"
import Button from "@/components/global/Button"

import styles from "./Sidebar.module.scss"

function Sidebar() {
  return (
    <aside className={styles.container}>
      <div className={styles.banner}>
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=72"
          alt="Profile Banner"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.profile}>
          <Avatar
            src="https://images.unsplash.com/photo-1630208232357-36479426fc24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
            alt="Imagem de perfil"
            border={true}
          />
          <strong>John Doe</strong>
          <span>Senior UX Designer</span>
        </div>
        <footer className={styles.footer}>
          <Button
            type="button"
            variant="outline"
          >
            Editar seu perfil
          </Button>
        </footer>
      </div>
    </aside>
  )
}

export default Sidebar
