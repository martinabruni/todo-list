import { JSX, useState } from "react";
import IButtonProps from "../../Interfaces/IButton";
import { STATUS } from "../../Constants/Status";
import { Status } from "../../Types";

export default function CompleteButton(props: IButtonProps) {
  const [statusStyle, setStatusStyle] = useState<Status>(STATUS.COMPLETED);

  const buttonStyles: Record<Status, JSX.Element> = {
    [STATUS.COMPLETED]: <i className="fa fa-check"></i>,
    [STATUS.OPEN]: <i className="fa fa-rotate-left"></i>,
  };

  function handleClick() {
    props.onClick();
    const newStatus =
      statusStyle === STATUS.COMPLETED ? STATUS.OPEN : STATUS.COMPLETED;
    setStatusStyle(newStatus);
  }

  return (
    <button className={`btn ${statusStyle}`} onClick={handleClick}>
      {buttonStyles[statusStyle]}
    </button>
  );
}
