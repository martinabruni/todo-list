// import { useState } from "react";
import CompleteButton from "../Buttons/CompleteButton";
import DeleteButton from "../Buttons/DeleteButton";
import { TaskObject } from "./TaskObject";
import { STATUS } from "../utils";

interface ITaskProps {
  task: TaskObject;
  updateTasks: (callback: (prev: TaskObject[]) => TaskObject[]) => void;
}

export default function Task(props: ITaskProps) {
  return (
    <li className={`task-item ${props.task.status}`}>
      <p className="task-label">{props.task.name}</p>
      <CompleteButton
        onClick={() => {
          const updatedTask = {
            ...props.task,
            status:
              props.task.status == STATUS.COMPLETED
                ? STATUS.OPEN
                : STATUS.COMPLETED,
          };
          props.updateTasks((prev) => {
            const newTasks = prev.map((task) =>
              task.id === props.task.id ? updatedTask : task
            );
            console.info("Task status updated:", updatedTask);
            return newTasks;
          });
        }}
      />
      <DeleteButton
        onClick={() => {
          props.updateTasks((prev) => {
            const updatedTasks = prev.filter(
              (task) => task.id !== props.task.id
            );
            console.info("Task removed:", props.task.id);
            return updatedTasks;
          });
        }}
      />
    </li>
  );
}
