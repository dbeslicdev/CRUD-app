import './LoginForm.css';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
    let navigate = useNavigate();

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const [userNameErr, setUserNameErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});

    
    const userChangeHandler = (e) => {
        setEnteredUserName(e.target.value);
        /* console.log('username changed'); */
    }

    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value);
        /* console.log('password changed'); */
    }

    const submitFormHandler = (e) => {
        e.preventDefault();
                
        /* const formData = {
            user: enteredUserName,
            password: enteredPassword
        }; */

        const isValid = formValidation();
        if(isValid) {
            setEnteredUserName('');
            setEnteredPassword('');
            navigate("/home");
        }        

        /* console.log(formData); */        
    };

    const formValidation = () => {
        const userNameErr = {};
        const passwordErr = {};
        let isValid = true;

        if(enteredUserName.trim().length < 5) {
            userNameErr.userNameLength = 'Username must have at least 5 characters.'
            isValid = false;
        }       

        if(enteredPassword.trim().length < 8) {
            passwordErr.passwordLength = "Password must have at least 8 characters.";
            isValid = false;
        }

        setUserNameErr(userNameErr);
        setPasswordErr(passwordErr);
        return isValid;
    }

    return (
    <div>
    <Layout className="layout">
        <Navbar/>
        <form onSubmit={submitFormHandler}>
        <div className='form-input__controls'>
            <div className='form-input__control'>
                <label>Username</label>
                <input
                   type='text' 
                    value={enteredUserName}
                    onChange={userChangeHandler}  
                    
                />                
                {Object.keys(userNameErr).map((key) => {
                    return <div>{userNameErr[key]}</div>
                })}
            </div>
            <div className='form-input__control'>
                <label>Password</label>
                <input
                    type='text'
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                    
                />
                {Object.keys(passwordErr).map((key) => {
                    return <div>{passwordErr[key]}</div>
                })}
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
    </Layout>
    </div>
    )
}

export default LoginForm;