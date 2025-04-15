import { STATUS } from "./Constants/Status";
import ITask from "./Interfaces/ITask";
import IDragonFruitProps from "./Interfaces/Props/IDragonfruitProps";

type ObjectValues<T> = T[keyof T];
export type StatusType = ObjectValues<typeof STATUS>;
export type TaskType = ITask;
export type DragonFruitType = IDragonFruitProps;
