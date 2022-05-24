import { React, useState } from "react";
import "./Home.css";
import "antd/dist/antd.css";
import Navbar from "../components/Navbar";
import { Layout } from "antd";
import { Table, Space, Modal } from "antd";
import HomeForm from "../components/home/HomeForm";
import { useForm } from "../hooks/useForm";

function ContactInfo({ contacts, setContact, onDeleteUser }) {
  const { handleInputChange, formValues, errors, setFormValues } = useForm({
    firstname: "",
    lastname: "",
    date: "",
    contacttype: "",
    contact: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (record) => {
    setIsModalVisible(true);
    setFormValues(record);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = () => {
    console.log("submit");
    console.log(formValues, "formValues", contacts, "kontakti");
    const updatedContacts = contacts.map((contact) =>
      contact.id === formValues.id ? formValues : contact
    );

    setContact(updatedContacts);
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
              errors={errors}
            />
          </Modal>
          <a onClick={() => onDeleteUser(record)}>Delete</a>
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
