import { useState } from "react";
import NewTask from "./NewTask";
import Task from "./Task";
import { TaskObject } from "./TaskObject";
import { STATUS } from "../utils";

export default function TaskList() {
  const [newTask, setNewTask] = useState<TaskObject>(new TaskObject());
  const [tasks, setTasks] = useState<TaskObject[]>([]);

  function addTask(): boolean {
    if (newTask.name === "") {
      console.warn("No task to add");
      return false;
    }
    setTasks((prev) => [newTask, ...prev]);
    setNewTask(new TaskObject());
    console.info("Task added:", newTask);
    return true;
  }

  function removeTask(id: number): void {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    console.info("Task removed:", id);
  }

  function toggleStatus(id: number): void {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === STATUS.OPEN ? STATUS.COMPLETED : STATUS.OPEN,
            }
          : task
      )
    );
  }

  return (
    <>
      <NewTask addTask={addTask} setNewTask={setNewTask} newTask={newTask} />
      <ul className="task-list">
        {tasks
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              removeTask={removeTask}
              id={task.id}
              toggleTaskStatus={toggleStatus}
            />
          ))
          .sort((a, b) =>
            a.props.task.status === STATUS.OPEN &&
            b.props.task.status !== STATUS.OPEN
              ? -1
              : 0
          )}
      </ul>
    </>
  );
}
