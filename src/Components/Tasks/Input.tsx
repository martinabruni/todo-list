import { useState } from "react";
import AddButton from "../Buttons/AddButton";
import { TaskObject } from "./TaskObject";

interface NewTaskProps {
  addTask: (task: TaskObject) => boolean;
}

export default function Input(props: NewTaskProps) {
  const [value, setValue] = useState<TaskObject>(new TaskObject());

  return (
    <div className="new-task-input">
      <input
        onChange={(e) => {
          console.info("Input changed, new value:", e.target.value);
          setValue(new TaskObject(e.target.value));
        }}
        type="text"
        placeholder="New Task"
        value={value.name}
      />
      <AddButton
        onClick={() => {
          props.addTask(value);
          setValue(new TaskObject());
        }}
      />
    </div>
  );
}
