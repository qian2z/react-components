import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

const App = () => {
  const header = ["Description", "Amount", "Category", " "];

  const [selectedCategory, setSelectedCategory] = useState("");

  const [items, setItems] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Movies", amount: 15, category: "Entertainment" },
  ]);

  const visibleItems = selectedCategory
    ? items.filter((e) => e.category === selectedCategory)
    : items;

  const onDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Form
        onSubmit={(item) =>
          setItems([...items, { ...item, id: items.length + 1 }])
        }
      />
      <br />
      <ExpenseFilter onFilter={(category) => setSelectedCategory(category)} />
      <br />
      <ExpenseList header={header} items={visibleItems} onDelete={onDelete} />
    </div>
  );
};

export default App;
