import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoFilter } from "./TodoFilter";

export function TodoLayout() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Выучить React 1", completed: false },
    { id: 2, text: "Выучить React 2", completed: false },
    { id: 3, text: "Сделать To-Do List 1", completed: true },
    { id: 4, text: "Сделать To-Do List 2", completed: false },
    { id: 5, text: "Сделать To-Do List 3", completed: true },
  ]);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setFilter("all");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="w-xl m-auto p-8 flex flex-col gap-3">
      <TodoForm addTask={addTask} />
      <TodoFilter setFilter={setFilter} />
      <TodoList
        tasks={tasks}
        filter={filter}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}
