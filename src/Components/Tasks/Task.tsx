// import { useState } from "react";
import CompleteButton from "../Buttons/CompleteButton";
import DeleteButton from "../Buttons/DeleteButton";
import { TaskObject } from "./TaskObject";
import { STATUS } from "../utils";

interface ITaskProps {
  task: TaskObject;
  removeTask: (id: number) => void;
  updateTasks: (callback: (prev: TaskObject[]) => TaskObject[]) => void;
}

export default function Task(props: ITaskProps) {
  return (
    <li className={`task-item ${props.task.status}`}>
      <p className="task-label">{props.task.name}</p>
      <CompleteButton
        onClick={() => {
          const updatedStatus =
            props.task.status == STATUS.COMPLETED
              ? STATUS.OPEN
              : STATUS.COMPLETED;
          props.updateTasks((prev) => {
            const newTasks = prev.map((task) =>
              task.id === props.task.id
                ? { ...task, status: updatedStatus }
                : task
            );
            console.info("Task status updated:", props.task);
            return newTasks;
          });
        }}
      />
      <DeleteButton onClick={() => props.removeTask(props.task.id)} />
    </li>
  );
}
