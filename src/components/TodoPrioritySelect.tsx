import { Priority } from "@/types/task";

const priorityOptions = [
  { value: "low", label: "🔴 Низкий" },
  { value: "medium", label: "🟡 Средний" },
  { value: "high", label: "🟢 Высокий" },
];

type TodoPrioritySelectProps = {
  onChange: (id: Priority) => void;
};

export const TodoPrioritySelect: React.FC<TodoPrioritySelectProps> = ({
  onChange,
}) => {
  return (
    <select
      onChange={(e) => {
        onChange(e.target.value as Priority);
      }}
      className="border-white/50 border-2 rounded-lg p-2 outline-0 grow"
    >
      {priorityOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
