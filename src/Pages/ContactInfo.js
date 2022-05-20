import { React, useState, useEffect } from "react";
import "./Home.css";
import "antd/dist/antd.css";
import Navbar from "../components/Navbar";
import { Layout } from "antd";
import { Table, Space } from "antd";

function ContactInfo(props) {
  const contacts = props.items;

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
      render: (record) => (
        <Space size="middle">
          <a>Update</a>
          <a onClick={() => props.onDeleteUser(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Layout className="layout">
      <Navbar />
      <Table dataSource={contacts} columns={columns} />
    </Layout>
  );
}

export default ContactInfo;
