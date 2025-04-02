import { clsx } from "clsx";

export function TodoItem({ task, deleteTask, toggleTask }) {
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
      <span className="grow">{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>×</button>
    </div>
  );
}
