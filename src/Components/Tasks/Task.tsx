import CompleteButton from "../Buttons/CompleteButton";
import DeleteButton from "../Buttons/DeleteButton";
import { TaskObject } from "./TaskObject";

interface ITaskProps {
  task: TaskObject;
  removeTask: (id: number) => void;
  id: number;
  toggleTaskStatus: (id: number) => void;
}

export default function Task(props: ITaskProps) {
  return (
    <li className={`task-item ${props.task.status}`}>
      <p className="task-label">{props.task.name}</p>
      <CompleteButton onClick={() => props.toggleTaskStatus(props.id)} />
      <DeleteButton onClick={() => props.removeTask(props.id)} />
    </li>
  );
}
