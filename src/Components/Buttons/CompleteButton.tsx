import { JSX, useState } from "react";
import IButtonProps from "./IButton";
import { TaskStatus } from "../TaskStatus";

export default function CompleteButton(props: IButtonProps) {
  const [statusStyle, setStatusStyle] = useState<string>(TaskStatus.Completed);

  const buttonStyles: Record<TaskStatus, JSX.Element> = {
    [TaskStatus.Completed]: <i className="fa fa-check"></i>,
    [TaskStatus.Open]: <i className="fa fa-rotate-left"></i>,
  };

  return (
    <button
      className={`btn ${statusStyle}`}
      onClick={() => {
        console.info("Task status updated:", statusStyle);
        props.onClick();

        const newStatus =
          statusStyle === TaskStatus.Completed
            ? TaskStatus.Open
            : TaskStatus.Completed;
        setStatusStyle(newStatus);
      }}
    >
      {buttonStyles[statusStyle as TaskStatus]}
    </button>
  );
}
