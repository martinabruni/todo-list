import AddButton from "../Buttons/AddButton";
import { TaskObject } from "./TaskObject";

interface NewTaskProps {
  addTask: () => boolean;
  newTask: TaskObject;
  setNewTask: (newTask: TaskObject) => void;
}

export default function NewTask(props: NewTaskProps) {
  return (
    <div className="new-task-input">
      <input
        onChange={(e) => {
          console.info("Input changed, new value:", e.target.value);
          props.setNewTask(new TaskObject(e.target.value));
        }}
        type="text"
        placeholder="New Task"
        value={props.newTask.name}
      />
      <AddButton onClick={props.addTask} />
    </div>
  );
}
