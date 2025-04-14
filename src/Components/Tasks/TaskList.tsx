import { useState } from "react";
import Input from "./Input";
import Task from "./Task";
import { TaskObject } from "./TaskObject";

export default function TaskList() {
  const [tasks, setTasks] = useState<TaskObject[]>([]);

  function addTask(newTask: TaskObject): boolean {
    if (newTask.name === "") {
      console.warn("No task to add");
      return false;
    }
    setTasks((prev) => [newTask, ...prev]);
    console.info("Task added:", newTask);
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
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            removeTask={removeTask}
            id={task.id}
          />
        ))}
      </ul>
    </>
  );
}
