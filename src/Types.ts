import { STATUS } from "./Constants/Status";

export type ObjectValues<T> = T[keyof T];
export type Status = ObjectValues<typeof STATUS>;
