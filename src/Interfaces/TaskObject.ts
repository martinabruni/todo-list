import { STATUS } from "../Constants/Status";
import { Status } from "../Types";

export class TaskObject {
  static class_id: number = 0;
  id: number;
  name: string;
  status: Status;
  image?: string;

  constructor(
    name: string = "",
    status: Status = STATUS.OPEN,
    image: string = ""
  ) {
    this.id = TaskObject.class_id++;
    this.name = name;
    this.status = status;
    this.image = image;
  }
}
