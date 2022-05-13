import React from "react";
import './Home.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import TableTemplate from '../components/TableTemplate';



function ContactInfo() {  

   return (
    <Layout className="layout">                     
          <TableTemplate/>
    </Layout>
    )
}

export default ContactInfo;