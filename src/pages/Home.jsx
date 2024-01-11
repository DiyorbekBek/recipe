import TodosList from "../components/TodosList";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const { documents: todos } = useCollection();
  // console.log(todos);
  return <div>{todos && <TodosList todos={todos} />}</div>;
}

export default Home;
