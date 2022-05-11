import './NewUserForm.css';
import 'antd/dist/antd.css';
import React, { useState } from 'react';

function NewUserForm() {

    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [selectedContactType, setSelectedContactType] = useState('');
    const [enteredContact, setEnteredContact] = useState('');

    const [firstNameErr, setFirstNameErr] = useState({});
    const [lastNameErr, setLastNameErr] = useState({});
    const [dateErr, setDateErr] = useState({});    
    const [contactErr, setContactErr] = useState({});


    const firstNameChangeHandler = (e) => {
        setEnteredFirstName(e.target.value);        
    }

    const lastNameChangeHandler = (e) => {
        setEnteredLastName(e.target.value);        
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);        
    }

    const contactTypeChangeHandler = (e) => {
        setSelectedContactType(e.target.value);        
    }

    const contactChangeHandler = (e) => {
        setEnteredContact(e.target.value);        
    }


    const submitFormHandler = (e) => {
        e.preventDefault();

        /* const formData = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            date: enteredDate,
            contactType: selectedContactType,
            contactData: enteredContact
        }; */

        const isValid = formValidation();
        if(isValid) {
            setEnteredFirstName('');
            setEnteredLastName('');
            setEnteredDate('');
            setSelectedContactType('');
            setEnteredContact('');
            alert('Your form has been submitted successfully');
        }

        /* console.log(formData); */
    };



    const resetFormHandler = (e) => {
        e.preventDefault();

        setEnteredFirstName('');
        setEnteredLastName('');
        setEnteredDate('');        
        setEnteredContact('');
    }



    const formValidation = () => {
        const firstNameErr = {};
        const lastNameErr = {};
        const dateErr = {};        
        const contactErr = {};
        let isValid = true;

        if (enteredFirstName.trim().length < 1) {
            firstNameErr.firstNameLength = 'Please fill out all required fields';
            isValid = false;
        } 

        if(enteredLastName.trim().length < 1) {
            lastNameErr.lastNameLength = 'Please fill out all required fields';
            isValid = false;
        }

         if(!enteredDate) {
            dateErr.selectedDate = 'Please fill out all required fields';
            isValid = false;
        }        

        if(enteredContact.trim().length < 1) {
            contactErr.contactData = 'Please fill out all required fields';
            isValid = false;
        }

        setFirstNameErr(firstNameErr);
        setLastNameErr(lastNameErr);
        setDateErr(dateErr);        
        setContactErr(contactErr);
        return isValid;
        
    }


return (
    <form onSubmit={submitFormHandler}>
        <div className='form-input__controls'>
            <div className='form-input__control'>
                <label>First name</label>
                <input
                   type='text' 
                    value={enteredFirstName}
                    onChange={firstNameChangeHandler}                      
                />
                {Object.keys(firstNameErr).map((key) => {
                    return <div>{firstNameErr[key]}</div>
                })}               
            </div>
            <div className='form-input__control'>
                <label>Last name</label>
                <input
                    type='text'
                    value={enteredLastName}
                    onChange={lastNameChangeHandler}                   
                />   
                {Object.keys(lastNameErr).map((key) => {
                    return <div>{lastNameErr[key]}</div>
                })}             
            </div>
            <div className='form-input__control'>
                <label>Date of birth</label>
                <input
                    type='date'
                    value={enteredDate}
                    onChange={dateChangeHandler}                     
                />   
                {Object.keys(dateErr).map((key) => {
                    return <div>{dateErr[key]}</div>
                })}            
            </div>
             <div className='form-input__control'>
                <label>Select Contact type:</label>
                <select
                value={selectedContactType}
                onChange={contactTypeChangeHandler}>                                
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>                  
                </select>                
            </div >
            <div className='form-input__control'>
                <label>Contact</label>
                <input
                    type='text'
                    value={enteredContact}
                    onChange={contactChangeHandler}  
                                      
                />  
                {Object.keys(contactErr).map((key) => {
                    return <div>{contactErr[key]}</div>
                })}  

            </div>
            <div className='form-input__action'> 
                <button type="submit">Submit</button>
                <button onClick={resetFormHandler}>Clear</button>
            </div>            
        </div>
    </form>  
        )
 }

 export default NewUserForm;