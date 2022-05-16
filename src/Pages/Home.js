import React from "react";
import './Home.css';
import 'antd/dist/antd.css';
import NewUserForm from "../components/NewUserForm";
import { Layout } from 'antd';
import Navbar from '../components/Navbar';
import {useNavigate} from "react-router-dom";





function Home(props) {

    let navigate = useNavigate();

    const saveFormDataHandler = (enteredFormData) => {
        const formData = {
          ...enteredFormData          
        };
        props.onAddContact(formData);
        navigate('/contact-info');        
      };
    
    

    return (
    <Layout className="layout">    
        <Navbar/>     
         <NewUserForm onSaveFormData={saveFormDataHandler}/>        
    </Layout>
    )
}

export default Home;