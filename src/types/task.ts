export type Priority = "low" | "medium" | "high";

export type Task = {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
};
