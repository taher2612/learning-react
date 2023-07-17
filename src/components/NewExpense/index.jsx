import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {

    const saveChanges = (expenseData) => { // this function will be passed down to the <ExpenseForm /> as a prop
        const expense = {
            ...expenseData,
            id : Math.random().toString()
        }

        onAddExpense(expense);
    }
    
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveChanges={saveChanges} />
        </div>
    )
}

export default NewExpense;