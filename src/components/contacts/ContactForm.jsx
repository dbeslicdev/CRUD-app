import { React, useContext } from "react";
import { Table, Space, Modal } from "antd";
import { HomeForm } from "../home/HomeForm";
import { ContactContext } from "../contacts/ContactContext";

export const ContactForm = () => {
  const {
    showModal,
    isModalVisible,
    handleSubmit,
    handleCancel,
    handleInputChange,
    formValues,
    errors,
    onDeleteUser,
    contacts,
  } = useContext(ContactContext);
  
 
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

  return <Table dataSource={contacts} columns={columns} />;
};
