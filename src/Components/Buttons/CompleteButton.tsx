import { JSX, useState } from "react";
import IButtonProps from "./IButton";
import { TaskStatus } from "./Status";

export default function CompleteButton(props: IButtonProps) {
  const [style, setStyle] = useState<string>(TaskStatus.Completed);

  const buttonStyles: Record<TaskStatus, JSX.Element> = {
    [TaskStatus.Completed]: <i className="fa fa-check"></i>,
    [TaskStatus.Open]: <i className="fa fa-rotate-left"></i>,
  };

  return (
    <button
      className={`btn ${style}`}
      onClick={() => {
        console.info("Button clicked, current style:", style);
        props.onClick();

        if (style === TaskStatus.Completed) {
          console.info("Switching to Open status");
          setStyle(TaskStatus.Open);
        } else {
          console.info("Switching to Completed status");
          setStyle(TaskStatus.Completed);
        }
      }}
    >
      {buttonStyles[style as TaskStatus]}
    </button>
  );
}
