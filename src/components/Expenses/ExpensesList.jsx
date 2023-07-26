import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">There Are No Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem {...expense} key={expense.id} />
      ))}
    </ul>
  );
};

export default ExpensesList;
