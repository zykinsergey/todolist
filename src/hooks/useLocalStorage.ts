import { Task } from "@/types/task";
import { useState, useEffect } from "react";

export function useLocalStorage<T>(): [
  T,
  (value: T | ((prevState: T) => T)) => void
] {
  const [tasks, setTasks] = useState<T>(() => {
    const storageTasks = localStorage.getItem("tasks");
    return storageTasks ? JSON.parse(storageTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return [tasks, setTasks];
}
