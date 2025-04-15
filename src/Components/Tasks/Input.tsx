import { useState } from "react";
import AddButton from "../Buttons/AddButton";
import { TaskObject } from "../../Interfaces/TaskObject";

interface IInputProps {
  addTask: (callback: (prev: TaskObject[]) => TaskObject[]) => void;
}

export default function Input(props: IInputProps) {
  const [value, setValue] = useState<string>("");

  function handleClick() {
    props.addTask((prev) => {
      if (value === "") {
        return prev;
      }
      const newTask = new TaskObject(value);
      const newTasks = [newTask, ...prev];

      return newTasks;
    });
    setValue("");
  }

  return (
    <div className="new-task-input">
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="New Task"
        value={value}
      />
      <AddButton onClick={handleClick} />
    </div>
  );
}
