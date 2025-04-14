import { useState } from "react";
import Input from "./Input";
import Task from "./Task";
import { TaskObject } from "./TaskObject";
import { STATUS } from "../utils";

export default function TaskList() {
  const [tasks, setTasks] = useState<TaskObject[]>([]);

  function addTask(newTask: TaskObject): boolean {
    if (newTask.name === "") {
      console.warn("No task to add");
      return false;
    }
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
    console.info("Task added:", newTask);
    console.info("New Tasks:", newTasks);
    return true;
  }

  function removeTask(id: number): void {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    console.info("Task removed:", id);
  }

  return (
    <>
      <Input addTask={addTask} />
      <ul className="task-list">
        {tasks
          .sort((a, b) => (a.id < b.id ? -1 : 0))
          .sort((a) => (a.status === STATUS.OPEN ? -1 : 1))
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              removeTask={removeTask}
              updateTasks={setTasks}
            />
          ))}
      </ul>
    </>
  );
}
