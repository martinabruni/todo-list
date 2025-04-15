import { UUIDTypes } from "uuid";
import { StatusType } from "../Types";

export default interface ITask {
  id: UUIDTypes;
  name: string;
  status: StatusType;
  isDragonfruit?: boolean;
}
