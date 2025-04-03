type TodoFilterProps = {
  setFilter: (val: string) => void;
};

export const TodoFilter: React.FC<TodoFilterProps> = ({ setFilter }) => {
  return (
    <div className="bg-sky-500/50 p-5 flex gap-2 justify-around rounded-xl">
      <button onClick={() => setFilter("all")}>Все</button>
      <button onClick={() => setFilter("active")}>Активные</button>
      <button onClick={() => setFilter("completed")}>Завершенные</button>
    </div>
  );
};
