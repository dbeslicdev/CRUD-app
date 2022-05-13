import 'antd/dist/antd.css';
import { Table } from 'antd';

function TableTemplate() {

  const data = [
    {
      firstName: 'First name1',
      lastName: 'Last name2',
      dateOfBirth: '20.10.1990.',
      contactType: 'Phone',
      contact: '0123456789',
      key:'1'
    },
    {
      firstName: 'First name2',
      lastName: 'Last name2',
      dateOfBirth: '20.10.1990.',
      contactType: 'Phone',
      contact: '0123456789',
      key:'2'
    },
    {
      firstName: 'First name1',
      lastName: 'Last name2',
      dateOfBirth: '20.10.1990.',
      contactType: 'Phone',
      contact: '0123456789',
      key:'3'
    },
    
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'key'
    },
    {
      title: 'Last name',
      dataIndex: 'lastName',
      key: 'key'
    },
    {
      title: 'Date of birth',
      dataIndex: 'dateOfBirth',
      key: 'key'
    },
    {
      title: 'Contact type',
      dataIndex: 'contactType',
      key: 'key'
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'key'
    },
  ]
  
  
  return (
  <div>
    <Table
    dataSource ={data}
    columns ={columns}
    />
  </div>
  )
}

export default TableTemplate;