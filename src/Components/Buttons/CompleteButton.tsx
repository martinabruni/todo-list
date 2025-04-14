import { JSX, useState } from "react";
import IButtonProps from "./IButton";
import { STATUS, Status } from "../utils";

export default function CompleteButton(props: IButtonProps) {
  const [statusStyle, setStatusStyle] = useState<Status>(STATUS.COMPLETED);

  const buttonStyles: Record<Status, JSX.Element> = {
    [STATUS.COMPLETED]: <i className="fa fa-check"></i>,
    [STATUS.OPEN]: <i className="fa fa-rotate-left"></i>,
  };

  return (
    <button
      className={`btn ${statusStyle}`}
      onClick={() => {
        console.info("Task status updated:", statusStyle);
        props.onClick();

        const newStatus =
          statusStyle === STATUS.COMPLETED ? STATUS.OPEN : STATUS.COMPLETED;
        setStatusStyle(newStatus);
      }}
    >
      {buttonStyles[statusStyle]}
    </button>
  );
}
