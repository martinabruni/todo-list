import { useState } from "react";
import AddButton from "../Buttons/AddButton";
import { TaskObject } from "./TaskObject";

interface IInputProps {
  addTask: (callback: (prev: TaskObject[]) => TaskObject[]) => void;
}

export default function Input(props: IInputProps) {
  const [value, setValue] = useState<string>("");

  return (
    <div className="new-task-input">
      <input
        onChange={(e) => {
          console.info("Input changed, new value:", e.target.value);
          setValue(e.target.value);
        }}
        type="text"
        placeholder="New Task"
        value={value}
      />
      <AddButton
        onClick={() => {
          props.addTask((prev) => {
            if (value === "") {
              console.warn("No task to add");
              return prev;
            }
            const newTask = new TaskObject(value);
            const newTasks = [newTask, ...prev];
            console.info("Task added:", newTask);
            console.info("New Tasks:", newTasks);
            return newTasks;
          });
          setValue("");
        }}
      />
    </div>
  );
}
