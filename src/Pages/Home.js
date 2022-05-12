import React from "react";
import './Home.css';
import 'antd/dist/antd.css';
import NewUserForm from "../components/NewUserForm";
import { Layout } from 'antd';
import Navbar from '../components/Navbar';




function Home(props) {

    const saveFormDataHandler = (enteredFormData) => {
        const formData = {
          ...enteredFormData          
        };
        props.onAddContact(formData);
        
      };

    return (
    <Layout className="layout">    
        <Navbar/>     
         <NewUserForm onSaveFormData={saveFormDataHandler}/>        
    </Layout>
    )
}

export default Home;