import React, { useState } from "react";
import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";
import { TodoFilter } from "@/components/TodoFilter";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Priority, Task } from "@/types/task";

export const TodoLayout: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>();

  const [filter, setFilter] = useState("all");

  const addTask = (text: string, priority: Priority = "medium") => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: text,
      completed: false,
      priority: priority,
    };
    setTasks([...tasks, newTask]);
    setFilter("all");
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="w-xl m-auto p-8 flex flex-col gap-3">
      <TodoForm addTask={addTask} />
      <TodoFilter setFilter={setFilter} />
      <TodoList
        tasks={tasks}
        deleteTasks={setTasks}
        filter={filter}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
};
