export const STATUS = {
  OPEN: "open",
  COMPLETED: "completed",
} as const;

type ObjectValues<T> = T[keyof T];
export type Status = ObjectValues<typeof STATUS>;
