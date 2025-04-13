import TaskList from "./Components/Buttons/TaskList";
import Header from "./Components/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="todo-list-container">
      <Header />
      <TaskList />
    </div>
  );
}
