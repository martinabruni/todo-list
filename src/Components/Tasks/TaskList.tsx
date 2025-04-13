import { useState } from "react";
import NewTask from "./NewTask";
import Task from "./Task";
import { TaskStatus } from "../Buttons/Status";

export default function TaskList() {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<{ name: string; status: string }[]>(
    []
  );

  function addTask(): boolean {
    if (newTask === "") {
      console.warn("No task to add");
      return false;
    }

    console.info("Adding task:", newTask);

    setTaskList((prev) => [
      { name: newTask, status: TaskStatus.Open },
      ...prev,
    ]);
    setNewTask("");

    console.info("Task added:", newTask);
    return true;
  }

  function removeTask(index: number): void {
    setTaskList((prev) => prev.filter((_, i) => i !== index));
    console.info("Task removed:", taskList[index]);
  }

  function toggleTaskStatus(index: number): void {
    setTaskList((prev) =>
      prev.map((task, i) =>
        i === index
          ? {
              ...task,
              status:
                task.status === TaskStatus.Open
                  ? TaskStatus.Completed
                  : TaskStatus.Open,
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
          .map((task, i) => (
            <Task
              key={i}
              task={task}
              removeTask={removeTask}
              index={i}
              toggleTaskStatus={toggleTaskStatus}
            />
          ))
          .sort((a, b) =>
            a.props.task.status === TaskStatus.Open &&
            b.props.task.status !== TaskStatus.Open
              ? -1
              : 0
          )}
      </ul>
    </>
  );
}
