import React, { useState } from 'react';
import './LoginForm.css';
/* import LocalStorage from './LocalStorage'; */

function LoginForm() {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    
    const userChangeHandler = (e) => {
        setEnteredUserName(e.target.value);
        console.log('username changed');
    }

    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value);
        console.log('password changed');
    }

    const submitFormHandler = (e) => {
        e.preventDefault();
        
        const formData = {
            user: enteredUserName,
            password: enteredPassword
        };
        console.log(formData);
        setEnteredUserName('');
        setEnteredPassword('');
    };

    return (
        <form onSubmit={submitFormHandler}>
        <div className='form-input__controls'>
            <div className='form-input__control'>
                <label>Username</label>
                <input
                   type='text' 
                    value={enteredUserName}
                    onChange={userChangeHandler}  
                />
            </div>
            <div className='form-input__control'>
                <label>Password</label>
                <input
                    type='text'
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                />
            </div>
             <div className='form-input__checkbox'>
                <label>
                <input type="checkbox" />
                    Remember me
                </label>
            </div >
            <div className='form-input__action'> 
            <button type="submit">Submit</button>
            </div>
            
        </div>
        </form>
    )
}

export default LoginForm;