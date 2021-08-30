// Core
import { useSelector } from "react-redux";

export const useNotification = () => {
  const notificationState = useSelector((state) => state.notification);

  const isPresent = notificationState.id;
  const type = notificationState.type;
  const message = notificationState.message;
  const description = notificationState.description;

  return {
    isPresent,
    type,
    message,
    description,
  };
};
