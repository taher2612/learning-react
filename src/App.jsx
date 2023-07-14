import React from "react";
import Expenses from "./components/Expenses";
import Card from "./components/Card";

import './components/Expenses.css'

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: "e2", 
      title: "New TV", 
      price: 799.49, 
      date: new Date(2021, 2, 12), 
    },
    {
      id: "e3",
      title: "Car Insurance",
      price: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      price: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // The below is how React implicitly transpiles JSX into DOM 
  // return React.createElement(
  //   Card,
  //   {className:"expenses"},
  //   React.createElement('h2', {}, 'Let\'s Get Started!'),
  //   React.createElement(Expenses, {expenses:expenses})
  // )
  return (
    <Card className="expenses">
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </Card>
  );
}

export default App;
