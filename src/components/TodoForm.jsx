import { useState } from "react";

export function TodoForm({ addTask }) {
  const [value, setValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (value.trim()) {
      addTask(value);
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
      <button
        type="submit"
        className="border-white/50 border-2 rounded-lg p-2 outline-0"
      >
        Создать
      </button>
    </form>
  );
}
