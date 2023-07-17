import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter" 

function Expenses({expenses}){
    const list = expenses.map(expense => <ExpenseItem {...expense} key={expense.id} />);

    const [filter, setFilter] = useState('2020');
    
    const filterYearSelected = (filterredYear) => {
        setFilter(filterredYear);
    }

    return (//there is no tag enclosing the list
        <Card className="expenses">
            <ExpenseFilter selected={filter} onFiterredYearSelected={filterYearSelected} />
            {list}
        </Card>

    );
}

export default Expenses;