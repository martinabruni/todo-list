import CompleteButton from "../Buttons/CompleteButton";
import DeleteButton from "../Buttons/DeleteButton";

interface ITaskProps {
  task: { name: string; status: string };
  removeTask: (index: number) => void;
  index: number;
  toggleTaskStatus: (index: number) => void;
}

export default function Task(props: ITaskProps) {
  return (
    <li className={`task-item ${props.task.status}`}>
      <p className="task-label">{props.task.name}</p>
      <CompleteButton onClick={() => props.toggleTaskStatus(props.index)} />
      <DeleteButton onClick={() => props.removeTask(props.index)} />
    </li>
  );
}
