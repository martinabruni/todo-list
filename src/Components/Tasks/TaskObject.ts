import { TaskStatus } from "../TaskStatus";

export class TaskObject {
  name: string;
  status: TaskStatus;

  constructor(name: string = "", status: TaskStatus = TaskStatus.Open) {
    this.name = name;
    this.status = status;
  }
}
