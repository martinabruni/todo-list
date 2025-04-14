import { useState } from "react";
import CompleteButton from "../Buttons/CompleteButton";
import DeleteButton from "../Buttons/DeleteButton";
import { TaskObject } from "./TaskObject";
import { STATUS } from "../utils";

interface ITaskProps {
  task: TaskObject;
  removeTask: (id: number) => void;
  id: number;
}

export default function Task(props: ITaskProps) {
  const [status, setStatus] = useState(props.task.status);

  return (
    <li className={`task-item ${status}`}>
      <p className="task-label">{props.task.name}</p>
      <CompleteButton
        onClick={() => {
          const updatedStatus =
            status == STATUS.COMPLETED ? STATUS.OPEN : STATUS.COMPLETED;
          setStatus(updatedStatus);
          props.task.status = updatedStatus;
          console.info("Task status updated:", props.task);
        }}
      />
      <DeleteButton onClick={() => props.removeTask(props.id)} />
    </li>
  );
}
