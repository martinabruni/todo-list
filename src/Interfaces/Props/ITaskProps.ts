import { TaskType } from "../../Types";

export default interface ITaskProps {
  task: TaskType;
  updateTasks: (callback: (prev: TaskType[]) => TaskType[]) => void;
}
