import ExpenseItem from "./ExpenseItem";

function Expenses({expenses}){
    const list = expenses.map(expense => <ExpenseItem {...expense} key={expense.id} />);
    return (//there is no tag enclosing the list
        <>{list}</>
    );
}

export default Expenses;