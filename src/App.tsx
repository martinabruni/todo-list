import Header from "./Components/Header";
import TaskList from "./Components/Tasks/TaskList";
import "./styles.css";

export default function App() {
  return (
    <div className="todo-list-container">
      <Header />
      <TaskList />
    </div>
  );
}
