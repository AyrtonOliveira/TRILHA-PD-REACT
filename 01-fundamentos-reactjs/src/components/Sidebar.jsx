import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"> 
      </img>
      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/97975293?v=4"></img>
        <strong>Ayrton Oliveira</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>

      </footer>
    </aside>
  
  );
}
