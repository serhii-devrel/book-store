// Core
import { useState, useCallback } from "react";

export const useAuthorForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditingAuthorMode, setIsEditingAuthorMode] = useState(false);

  const showModal = useCallback((editingMode = false) => {
    if (editingMode) {
      setIsEditingAuthorMode(true);
    }
    setIsModalVisible(true);
  }, []);

  const handleOk = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return {
    isModalVisible,
    isEditingAuthorMode,
    showModal,
    handleOk,
    handleCancel,
  };
};
