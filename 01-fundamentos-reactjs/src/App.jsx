import { Header } from "./components/Header.jsx";
import { Post } from "./Post.jsx";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar.jsx";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ayrton Oliveira"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quo maiores pariatur, est beatae enim, quibusdam iusto, accusamus numquam tempora cum eius facere quod expedita aperiam aut ab ipsa laborum?"
          />
          <Post author="Cleide Maria" content="Um post muito legal!" />
        </main>
      </div>
    </div>
  );
}
export default App;
