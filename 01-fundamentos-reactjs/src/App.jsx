import { Post } from "./Post.jsx";

export function App() {
  return (
    <div>
      <Post
        author="Ayrton Oliveira"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quo maiores pariatur, est beatae enim, quibusdam iusto, accusamus numquam tempora cum eius facere quod expedita aperiam aut ab ipsa laborum?"
      />
      <Post author="Cleide Maria" content="Um post muito legal!" />
    </div>
  );
}
export default App;
