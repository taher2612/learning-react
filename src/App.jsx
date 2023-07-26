import React, {useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense"; //as NewExpense is stored in the index.jsx, ∴ we dont have to mention /index, as it is regarded as the default file for any imports in JS
import './components/Expenses/Expenses.css'

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12), 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  // const expenses = ;

  // The below is how React implicitly transpiles JSX into DOM 
  // return React.createElement(
  //   Card,
  //   {className:"expenses"},
  //   React.createElement('h2', {}, 'Let\'s Get Started!'),
  //   React.createElement(Expenses, {expenses:expenses})
  // )

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  
  return (
    <>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;