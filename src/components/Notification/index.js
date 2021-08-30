// Core
import { useEffect } from "react";

// Style
import { notification } from "antd";

// Hooks
import { useNotification } from "../../hooks";

export const Notification = () => {
  const { isPresent, type, message, description } = useNotification();

  useEffect(() => {
    if (!isPresent) return;
    notification.open({
      type,
      message,
      description,
    });
  }, [isPresent, type, message, description]);

  return null;
};
