import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = ({onSaveChanges}) => {

    const [enterredTitle, setEnterredTitle] = useState('');
    const [enterredAmount, setEnterredAmount] = useState('');
    const [enterredDate, setEnterredDate] = useState('');
    // dynamic styles handled by states:

    const [align, setAlign] = useState({
        textAlign:'center'
    });

    const [display, setDisplay] = useState({
        display :'none'
    });

    const [type, setType] = useState('button');

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

        console.log(enterredDate);
        const expenseData = {
            title: enterredTitle,
            amount: +enterredAmount,
            date : new Date(enterredDate)
        }

        onSaveChanges(expenseData);        

        setEnterredTitle('');
        setEnterredAmount('');
        setEnterredDate(''); 
        hideForm();
    }
    

    // --------------------------- :
    const showForm = (e) => {
        if(e.target.type === 'submit') return ;
        e.preventDefault();
        setAlign((prevAlign) => {
            return {
                textAlign : 'right'
            };
        });

        setDisplay((prevDisplay) => {
            return {} //setting {empty}, as we want the elements to set their display to default
        }); 

        setType((prevType) => {
            return 'submit';
        });
    } 

    const hideForm = () => {
        setAlign((prevAlign) => {
            return {
                textAlign : 'center'
            };
        });

        setDisplay((prevDisplay) => {
            return {
                display:'none'
            };
        }); 

        setType((prevType) => {
            return 'button';
        });
    } 


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls' style={display}>
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
            <div className='new-expense__actions' style={align}>
                <button type='button' style={display} onClick={hideForm}>Cancel</button>
                <button type={type} onClick={showForm}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;