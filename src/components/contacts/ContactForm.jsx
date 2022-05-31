import { React } from "react";
import { Table, Space, Modal } from "antd";
import { HomeForm } from "../home/HomeForm";

export const ContactForm = ({
  formValues,
  contacts,
  showModal,
  isModalVisible,
  handleSubmit,
  handleCancel,
  handleInputChange,
  deleteUserHandler,
}) => {
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

  return <Table dataSource={contacts} columns={columns} />;
};
