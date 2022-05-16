import { React, useState, useEffect } from "react";
import './Home.css';
import 'antd/dist/antd.css';
import Navbar from '../components/Navbar';
import { Layout } from 'antd';
import { Table, Space } from 'antd';




function ContactInfo(props) {

    const contacts = props.items;    

    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {    

    /*  for(let i=0; i < contacts; i++) {
        contacts.push({
          id:`id ${i}`,
          firstName: `firstName ${i}`,
          lastName: `lastName ${i}`,
          date: `date ${i}`,
          contactType: `contactType ${i}`,
          contactData: `contactData ${i}`
        })
      } */

      setDataSource(contacts)
    }, [])       
    
    console.log(dataSource);
      

    const columns = [
       
        {
            title: 'Name',
            dataIndex: 'firstName',
            key: 'id'
          },
          {
            title: 'Last name',
            dataIndex: 'lastName',
            key: 'id'
          },
          {
            title: 'Date of birth',
            dataIndex: 'date',
            key: 'id'
          },
          {
            title: 'Contact type',
            dataIndex: 'contactType',
            key: 'id'
          },
          {
            title: 'Contact',
            dataIndex: 'contactData',
            key: 'id'
        },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: () => 
          <Space size="middle">
            <a>Update</a>
            <a>Delete</a>
          </Space>,
        },         
    ]

   return (
    <Layout className="layout">  
        <Navbar/>                   
        <Table
            dataSource = {dataSource}
            columns = {columns}
        />                 
     </Layout>
    )
}

export default ContactInfo; 