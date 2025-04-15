import CompleteButton from "../Buttons/CompleteButton";
import DeleteButton from "../Buttons/DeleteButton";
import { TaskObject } from "../../Interfaces/TaskObject";
import { STATUS } from "../../Constants/Status";

interface ITaskProps {
  task: TaskObject;
  updateTasks: (callback: (prev: TaskObject[]) => TaskObject[]) => void;
}

export default function Task(props: ITaskProps) {
  function completeButtonClick() {
    const updatedTask = {
      ...props.task,
      status:
        props.task.status == STATUS.COMPLETED ? STATUS.OPEN : STATUS.COMPLETED,
    };
    props.updateTasks((prev) => {
      const newTasks = prev.map((task) =>
        task.id === props.task.id ? updatedTask : task
      );

      return newTasks;
    });
  }

  function deleteButtonClick() {
    props.updateTasks((prev) => {
      const updatedTasks = prev.filter((task) => task.id !== props.task.id);
      return updatedTasks;
    });
  }

  return (
    <li className={`task-item ${props.task.status}`}>
      <p className={`task-label ${props.task.status}`}>{props.task.name}</p>
      <CompleteButton onClick={completeButtonClick} />
      <DeleteButton onClick={deleteButtonClick} />
    </li>
  );
}
