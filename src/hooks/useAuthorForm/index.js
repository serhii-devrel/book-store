// Core
import { useState, useCallback } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "antd";

// Actions
import { authorsActions } from "../../bus/authors/actions";

export const useAuthorForm = (isEditMode = false) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { author } = useSelector((state) => state.authors);
  const { isFetching } = useSelector((state) => state.ui);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [validator, setValidatorMessage] = useState({
    visible: false,
    message: "",
  });
  const dateFormat = "YYYY/MM/DD";

  const scheme = {
    firstName: isEditMode ? author.firstName : "",
    lastName: isEditMode ? author.lastName : "",
    dateOfBirth: isEditMode ? moment(author.dateOfBirth) : "",
    dateOfDeath:
      isEditMode && author.dateOfDeath ? moment(author.dateOfDeath) : "",
  };

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

  const showModal = useCallback(
    (id) => {
      if (isEditMode) {
        dispatch(authorsActions.getAuthorAsync(id));
      }
      setIsModalVisible(true);
    },
    [dispatch, isEditMode]
  );

  const handleSubmit = useCallback(
    (values) => {
      // Arrange
      const { dateOfBirth, dateOfDeath, firstName, lastName } = values;
      const formattedDateOfBirth = dateOfBirth.format("L");
      const formattedDateOfDeath = dateOfDeath ? dateOfDeath.format("L") : "";
      const formData = {
        firstName,
        lastName,
        dateOfBirth: formattedDateOfBirth,
        dateOfDeath: formattedDateOfDeath,
      };

      // Only birth date contains
      if (formattedDateOfBirth && !formattedDateOfDeath) {
        setIsModalVisible(false);
        setValidatorMessage((state) => ({
          ...state.message,
          message: "",
          visible: false,
        }));

        if (isEditMode) {
          return dispatch(authorsActions.editAuthorAsync(author.id, formData));
        } else {
          return (
            dispatch(authorsActions.addAuthorAsync(formData)) &&
            form.resetFields()
          );
        }
      }

      // birth date >= death date
      if (moment(formattedDateOfBirth).isSameOrAfter(formattedDateOfDeath)) {
        return setValidatorMessage((state) => ({
          ...state.message,
          message:
            "Date of birth cannot be greater or equal than date of death!",
          visible: true,
        }));
      }

      // enjoying case
      if (isEditMode) {
        dispatch(authorsActions.editAuthorAsync(author.id, formData));
      } else {
        dispatch(authorsActions.addAuthorAsync(formData)) && form.resetFields();
      }
      setIsModalVisible(false);
      setValidatorMessage((state) => ({
        ...state.message,
        message: "",
        visible: false,
      }));
    },
    [dispatch, isEditMode, author.id, form]
  );

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return {
    showModal,
    handleSubmit,
    handleCancel,
    formRef: form,
    isModalVisible,
    isFetching,
    dateFormat,
    rules,
    scheme,
    validator,
  };
};
