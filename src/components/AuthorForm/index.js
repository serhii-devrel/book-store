// Core
import React from "react";

// Hooks
import { useAuthorForm } from "../../hooks";

// Style
import { Modal, Button, Form, Input, DatePicker } from "antd";
import { EditOutlined } from "@ant-design/icons";

export const AuthorForm = (props) => {
  const {
    showModal,
    handleCancel,
    handleSubmit,
    isModalVisible,
    rules,
    scheme,
    formRef,
    dateFormat,
    validator,
  } = useAuthorForm();
  const { isEditMode } = props;

  return (
    <>
      {isEditMode ? (
        <>
          <Button type="secondary" onClick={() => showModal(isEditMode)}>
            <EditOutlined />
          </Button>
        </>
      ) : (
        <>
          <Button type="primary" onClick={() => showModal()}>
            Add Author
          </Button>
        </>
      )}
      <Modal
        title={isEditMode ? "Edit author" : "Add author"}
        visible={isModalVisible}
        cancelText="Close"
        footer=""
        onCancel={handleCancel}
      >
        <Form
          form={formRef}
          name="author form"
          onFinish={handleSubmit}
          initialValues={scheme}
        >
          <Form.Item
            name="firstName"
            label="First name: "
            rules={rules.firstName}
          >
            <Input />
          </Form.Item>
          <Form.Item name="lastName" label="Last name: " rules={rules.lastName}>
            <Input />
          </Form.Item>
          <Form.Item
            name="dateOfBirth"
            label="Date of birth: "
            rules={rules.dateOfBirth}
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item name="dateOfDeath" label="Date of death: ">
            <DatePicker format={dateFormat} />
          </Form.Item>
          <p>{validator.visible && validator.message}</p>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isEditMode ? "Edit" : "Add"}
            </Button>
            <Button type="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
