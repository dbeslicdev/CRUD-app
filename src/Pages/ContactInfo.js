import { React, useState, useEffect } from "react";
import "./Home.css";
import "antd/dist/antd.css";
import Navbar from "../components/Navbar";
import { Layout } from "antd";
import { Table, Space } from "antd";

function ContactInfo(props) {
  const contacts = props.items;

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    for (let i = 0; i < contacts; i++) {
      contacts.push({
        id: `id ${i}`,
        firstname: `firstname ${i}`,
        lastname: `lastname ${i}`,
        date: `date ${i}`,
        contactType: `contacttype ${i}`,
        contactData: `contact ${i}`,
      });
    }

    setDataSource(contacts);
    console.log(contacts);
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "firstname",
      key: "id",
    },
    {
      title: "Last name",
      dataIndex: "lastname",
      key: "id",
    },
    {
      title: "Date of birth",
      dataIndex: "date",
      key: "id",
    },
    {
      title: "Contact type",
      dataIndex: "contacttype",
      key: "id",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "id",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <Space size="middle">
          <a>Update</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Layout className="layout">
      <Navbar />
      <Table dataSource={dataSource} columns={columns} />
    </Layout>
  );
}

export default ContactInfo;
