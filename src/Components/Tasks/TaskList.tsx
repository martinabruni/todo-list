import { useState } from "react";
import NewTask from "./NewTask";
import Task from "./Task";
import { TaskObject } from "./TaskObject";
import { STATUS } from "../utils";

export default function TaskList() {
  const [newTask, setNewTask] = useState<TaskObject>(new TaskObject());
  const [taskList, setTaskList] = useState<TaskObject[]>([]);

  function addTask(): boolean {
    if (newTask.name === "") {
      console.warn("No task to add");
      return false;
    }
    setTaskList((prev) => [newTask, ...prev]);
    setNewTask(new TaskObject());
    console.info("Task added:", newTask);
    return true;
  }

  function removeTask(id: number): void {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
    console.info("Task removed:", id);
  }

  function toggleTaskStatus(id: number): void {
    setTaskList((prev) =>
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
        {taskList
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              removeTask={removeTask}
              id={task.id}
              toggleTaskStatus={toggleTaskStatus}
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
