import { STATUS } from "../Constants/Status";
import { Status } from "../Types";

export class TaskObject {
  static class_id: number = 0;
  id: number;
  name: string;
  status: Status;

  constructor(name: string = "", status: Status = STATUS.OPEN) {
    this.id = TaskObject.class_id++;
    this.name = name;
    this.status = status;
  }
}
