import IButtonProps from "../../Interfaces/Props/IButtonProps";

export default function DeleteButton(props: IButtonProps) {
  return (
    <button onClick={props.onClick} className="btn">
      <i className="fa fa-trash"></i>
    </button>
  );
}
