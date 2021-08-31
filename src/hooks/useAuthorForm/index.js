// Core
import { useState, useCallback, useEffect } from "react";
import { Form } from "antd";

export const useAuthorForm = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [validator, setValidatorMessage] = useState({
    visible: false,
    message: "",
  });
  const dateFormat = "YYYY/MM/DD";

  useEffect(() => {
    if (isEditMode) {
      console.log("Is edit mode");
    }
    setIsEditMode(false);
  }, [isEditMode]);

  const scheme = !isEditMode
    ? {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        dateOfDeath: "",
      }
    : null;

  const rules = {
    firstName: [
      {
        required: true,
        message: "Please input the first name",
      },
    ],
    lastName: [
      {
        required: true,
        message: "Please input the last name",
      },
    ],
    dateOfBirth: [
      {
        required: true,
        message: "Please input the date of birth",
      },
    ],
  };

  const showModal = useCallback((isEditMode = false) => {
    if (isEditMode) {
      setIsEditMode(true);
    }
    setIsModalVisible(true);
  }, []);

  const handleSubmit = useCallback(
    (values) => {
      const { dateOfBirth, dateOfDeath } = values;

      const formattedDateOfBirth = dateOfBirth.format("L");
      const formattedDateOfDeath = dateOfDeath ? dateOfDeath.format("L") : "";

      // Only birth date
      if (formattedDateOfBirth && !formattedDateOfDeath) {
        form.resetFields();
        setIsModalVisible(false);
        setValidatorMessage((state) => ({
          ...state.message,
          message: "",
          visible: false,
        }));
        return console.log(values);
      }

      // birth date >= death date
      if (formattedDateOfBirth >= formattedDateOfDeath) {
        return setValidatorMessage((state) => ({
          ...state.message,
          message:
            "Date of birth cannot be greater or equal than date of death",
          visible: true,
        }));
      }

      // enjoying case
      console.log(values);
      form.resetFields();
      setIsModalVisible(false);
      setValidatorMessage((state) => ({
        ...state.message,
        message: "",
        visible: false,
      }));
    },
    [form]
  );

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return {
    formRef: form,
    isModalVisible,
    showModal,
    handleSubmit,
    handleCancel,
    dateFormat,
    rules,
    scheme,
    validator,
  };
};
