import { React, useState, useContext } from "react";
import "./Home.css";
import "antd/dist/antd.css";
import Navbar from "../components/Navbar";
import { HomeForm } from "../components/home/HomeForm";
import { Table, Space, Modal } from "antd";
import { Layout } from "antd";
import { HomeContext } from "../components/home/HomeContext";

function ContactInfo() {
  const { formValues, contacts, setContact, setFormValues, handleInputChange } =
    useContext(HomeContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = () => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === formValues.id ? formValues : contact
    );

    setContact(updatedContacts);
    setIsModalVisible(false);
  };

  const deleteUserHandler = (record) => {
    setContact((prevContacts) => {
      return prevContacts.filter((contact) => contact.id != record.id);
    });
  };

  const showModal = (record) => {
    setIsModalVisible(true);
    setFormValues(record);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
          <a onClick={() => showModal(record)}>Update</a>
          <Modal
            title="Update user data"
            visible={isModalVisible}
            onOk={handleSubmit}
            onCancel={handleCancel}
          >
            <HomeForm
              handleInputChange={handleInputChange}
              formValues={formValues}
            />
          </Modal>
          <a onClick={() => deleteUserHandler(record)}>Delete</a>
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
