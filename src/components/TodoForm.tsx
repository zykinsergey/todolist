import { FormEvent, useState } from "react";
import { TodoPrioritySelect } from "@/components/TodoPrioritySelect";
import { Priority } from "@/types/task";

type TodoFromProps = {
  addTask: (value: string, priority: Priority) => void;
};

export const TodoForm: React.FC<TodoFromProps> = ({ addTask }) => {
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    if (value.trim()) {
      addTask(value, priority);
      setValue("");
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className="bg-sky-500/50 p-5 flex justify-between rounded-xl flex-1/2 gap-3"
    >
      <input
        className="border-white/50 border-2 rounded-lg p-2 outline-0 grow"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Create task"
      />
      <TodoPrioritySelect onChange={setPriority} />
      <button
        type="submit"
        className="border-white/50 border-2 rounded-lg p-2 outline-0"
      >
        Создать
      </button>
    </form>
  );
};
