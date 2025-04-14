import { useState } from "react";
import Input from "./Input";
import Task from "./Task";
import { TaskObject } from "./TaskObject";

export default function TaskList() {
  const [tasks, setTasks] = useState<TaskObject[]>([]);

  return (
    <>
      <Input addTask={setTasks} />
      <ul className="task-list">
        {tasks
          .sort((a, b) => (a.id < b.id ? -1 : 0))
          .map((task) => (
            <Task key={task.id} task={task} updateTasks={setTasks} />
          ))}
      </ul>
    </>
  );
}
