import { ReactNode, useState } from "react";
import Input from "./Input";
import Task from "./Task";
import { STATUS } from "../../Constants/Status";
import { TaskType } from "../../Types";

export default function TaskList() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function renderTasks(): ReactNode {
    return tasks
      .sort((a) => (a.status === STATUS.OPEN ? -1 : 1))
      .map((task) => (
        <Task key={task.id.toString()} task={task} updateTasks={setTasks} />
      ));
  }

  return (
    <>
      <Input addTask={setTasks} />
      <ul className={`task-list${tasks.length < 1 ? " empty" : ""}`}>
        {renderTasks()}
      </ul>
    </>
  );
}
