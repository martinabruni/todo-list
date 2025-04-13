import IButtonProps from "./IButton";

export default function AddButton(props: IButtonProps) {
  return (
    <button onClick={props.onClick} className="btn light">
      <i className="fa fa-plus"></i>
    </button>
  );
}
