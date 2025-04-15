import { STATUS } from "./Constants/Status";
import ITask from "./Interfaces/ITask";

type ObjectValues<T> = T[keyof T];
export type Status = ObjectValues<typeof STATUS>;
export type TaskType = ITask;
