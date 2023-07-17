import { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem({date, title, amount}) {

  const [newTitle, setNewTitle] = useState(title);

  const changeTitleHandler = (e) => {
    setNewTitle("updated!!!!");
    console.log(newTitle);
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{newTitle}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={changeTitleHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
