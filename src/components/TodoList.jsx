import { TodoItem } from "./TodoItem";

export function TodoList({ tasks, filter, deleteTask, toggleTask }) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="bg-sky-500/50 p-5 flex flex-col gap-2 justify-between rounded-xl">
      {filteredTasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
}
