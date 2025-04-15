import { useState } from "react";
import AddButton from "../Buttons/AddButton";
import { TaskType } from "../../Types";
import { STATUS } from "../../Constants/Status";
import { v4 as uuidv4 } from "uuid";

interface IInputProps {
  addTask: (callback: (prev: TaskType[]) => TaskType[]) => void;
}

export default function Input(props: IInputProps) {
  const [value, setValue] = useState<string>("");

  function handleClick() {
    props.addTask((prev) => {
      if (value === "") {
        return prev;
      }
      const newTask: TaskType = {
        id: uuidv4(),
        name: value,
        status: STATUS.OPEN,
      };

      if (newTask.name.toLowerCase().replace(" ", "").includes("dragonfruit")) {
        newTask.isDragonfruit = true;
      }
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
