import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = ({onSaveChanges}) => {

    const [enterredTitle, setEnterredTitle] = useState('');
    const [enterredAmount, setEnterredAmount] = useState('');
    const [enterredDate, setEnterredDate] = useState('');


    const titleOnChangeHandler = (e) => {
        setEnterredTitle((prevTitle) => {
            return e.target.value;
        });
    }

    const amountOnChangeHandler = (e) => {
        setEnterredAmount((prevAmount) => {
            return e.target.value;
        });
    }

    const dateOnChangeHandler = (e) => {
        setEnterredDate((prevDate) => {
            return e.target.value;
        });
    }


    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enterredTitle,
            amount: enterredAmount,
            date : new Date(enterredDate)
        }

        onSaveChanges(expenseData);        

        setEnterredTitle('');
        setEnterredAmount('');
        setEnterredDate(''); 
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={enterredTitle} type="text" onChange={titleOnChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enterredAmount} type="number" onChange={amountOnChangeHandler} min={0.01} step={0.01}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enterredDate} type="date" onChange={dateOnChangeHandler} min={'2019-01-01'} max={'2022-12-31'}/>
                </div>
            </div>
            <div className='new-expense__actions' >
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;