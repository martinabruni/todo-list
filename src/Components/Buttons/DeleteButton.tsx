import IButtonProps from "../../Interfaces/IButton";

export default function DeleteButton(props: IButtonProps) {
  return (
    <button onClick={props.onClick} className="btn">
      <i className="fa fa-trash"></i>
    </button>
  );
}
