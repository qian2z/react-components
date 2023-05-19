import Item from "./Item";

interface Props {
  header: string[];
  items: Item[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ header, items, onDelete }: Props) => {
  if (items.length === 0) return null;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {header.map((value) => (
            <th key={value} scope="col">
              {value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>${item.amount.toFixed(2)}</td>
            <td>{item.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${items.reduce((acc, obj) => acc + obj.amount, 0).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
