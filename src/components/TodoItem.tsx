import { clsx } from "clsx";
import { Task } from "../types/task";

type TodoItemProps = {
  task: Task;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  task,
  deleteTask,
  toggleTask,
}) => {
  const t = 0;

  return (
    <div
      className={clsx(
        "border-white/50 border-2 rounded-lg p-2 outline-0 grow flex gap-2 align-middle justify-between",
        task.completed && "line-through"
      )}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.priority}</span>
      <span className="grow">{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>×</button>
    </div>
  );
};
