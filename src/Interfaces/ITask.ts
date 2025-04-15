import { UUIDTypes } from "uuid";
import { Status } from "../Types";

export default interface ITask {
  id: UUIDTypes;
  name: string;
  status: Status;
  image?: string;
}
