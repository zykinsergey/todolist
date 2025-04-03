import { TodoItem } from "./TodoItem";
import { Task } from "../types/task";

type TodoListProps = {
  tasks: Task[];
  filter: string;
  deleteTasks: (tasks: Task[]) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  tasks,
  deleteTasks,
  filter,
  deleteTask,
  toggleTask,
}) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  if (!filteredTasks.length)
    return (
      <div className="bg-sky-500/50 p-5 flex flex-col gap-2 justify-between rounded-xl">
        Empty list
      </div>
    );

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

      <button
        type="button"
        onClick={() => {
          if (confirm("Are you sure?")) deleteTasks([]);
        }}
        className="border-white/50 border-2 rounded-lg p-2 outline-0"
      >
        Очистить
      </button>
    </div>
  );
};
