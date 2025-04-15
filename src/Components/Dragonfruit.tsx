import IDragonFruitProps from "../Interfaces/Props/IDragonfruitProps";

export default function DragonFruit(props: IDragonFruitProps) {
  return (
    <>
      {props.images.map((img, i) => {
        return <img src={img} alt={`dragonfruit-${i}`} />;
      })}
    </>
  );
}
