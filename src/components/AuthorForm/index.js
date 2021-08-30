// Core
import React from "react";

// Hooks
import { useAuthorForm } from "../../hooks";

// Style
import { Modal, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

export const AuthorForm = (props) => {
  const { isEditMode } = props;

  const {
    isModalVisible,
    isEditingAuthorMode,
    showModal,
    handleCancel,
    handleOk,
  } = useAuthorForm();

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
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        {isEditingAuthorMode && <p>Editing mode</p>}
      </Modal>
    </>
  );
};
