import categories from "./categories";

interface Props {
  onFilter: (category: string) => void;
}

const ExpenseFilter = ({ onFilter }: Props) => {
  return (
    <select className="form-select" onChange={(e) => onFilter(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
