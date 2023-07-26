import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList"; 
import ExpenseChart from "./ExpenseChart";


function Expenses({expenses}){
    const [filter, setFilter] = useState('2020');
    
    const filterYearSelected = (filterredYear) => {
        setFilter(filterredYear);
    }
    
    const filterredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() == filter;
    });

    return (//there is no tag enclosing the list
        <Card className="expenses">
            <ExpenseFilter selected={filter} onFilterredYearSelected={filterYearSelected} />
            <ExpenseChart expenses={filterredExpenses} />
            <ExpensesList items={filterredExpenses} />
        </Card>

    );
}

export default Expenses;