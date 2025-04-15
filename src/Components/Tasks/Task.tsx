import CompleteButton from "../Buttons/CompleteButton";
import DeleteButton from "../Buttons/DeleteButton";
import { STATUS } from "../../Constants/Status";
import { IMAGES } from "../../Constants/Image";
import ITaskProps from "../../Interfaces/Props/ITaskProps";
import DragonFruit from "../Dragonfruit";

export default function Task(props: ITaskProps) {
  function completeButtonClick() {
    const updatedTask = {
      ...props.task,
      status:
        props.task.status == STATUS.COMPLETED ? STATUS.OPEN : STATUS.COMPLETED,
    };
    props.updateTasks((prev) => {
      const newTasks = prev.map((task) =>
        task.id === props.task.id ? updatedTask : task
      );

      return newTasks;
    });
  }

  function getRandomImage(): string {
    const imageUrls = Object.values(IMAGES);
    const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    return randomImage;
  }

  function getDragonFruits(): string[] {
    const dragonfruits: string[] = [];
    let dragonFruitsCounter = props.task.name.match(
      new RegExp("more", "gi")
    )?.length;
    if (dragonFruitsCounter !== undefined) {
      for (let i = 0; i <= dragonFruitsCounter; i++) {
        dragonfruits.push(getRandomImage());
      }
    } else {
      dragonfruits.push(getRandomImage());
    }

    return dragonfruits;
  }

  function deleteButtonClick() {
    props.updateTasks((prev) => {
      const updatedTasks = prev.filter((task) => task.id !== props.task.id);
      return updatedTasks;
    });
  }

  return (
    <li className={`task-item ${props.task.status}`}>
      <p className={`task-label ${props.task.status}`}>
        {props.task.isDragonfruit ? (
          <DragonFruit images={getDragonFruits()} />
        ) : (
          props.task.name
        )}
      </p>
      <CompleteButton onClick={completeButtonClick} />
      <DeleteButton onClick={deleteButtonClick} />
    </li>
  );
}
