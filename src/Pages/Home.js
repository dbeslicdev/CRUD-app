import React from "react";
import './Home.css';
import 'antd/dist/antd.css';
import NewUserForm from "../components/NewUserForm";
import { Layout } from 'antd';
import Navbar from '../components/Navbar';


function Home() {
    return (
    <Layout className="layout">    
        <Navbar/>     
         <NewUserForm/>        
    </Layout>
    )
}

export default Home;