import { useState } from "react";
import AddButton from "../Buttons/AddButton";
import { TaskObject } from "./TaskObject";

interface IInputProps {
  addTask: (task: TaskObject) => boolean;
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
          props.addTask(new TaskObject(value));
          setValue("");
        }}
      />
    </div>
  );
}
