import CompleteButton from "../Buttons/CompleteButton";
import DeleteButton from "../Buttons/DeleteButton";
import { STATUS } from "../../Constants/Status";
import { TaskType } from "../../Types";

interface ITaskProps {
  task: TaskType;
  updateTasks: (callback: (prev: TaskType[]) => TaskType[]) => void;
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
      {!props.task.image ? (
        <p className={`task-label ${props.task.status}`}>{props.task.name}</p>
      ) : (
        <p className={`task-label ${props.task.status}`}>
          <img src={props.task.image} alt="" />
        </p>
      )}

      <CompleteButton onClick={completeButtonClick} />
      <DeleteButton onClick={deleteButtonClick} />
    </li>
  );
}
