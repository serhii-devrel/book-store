// Core
import { useEffect } from "react";

// Style
import { notification } from "antd";

// Hooks
import { useNotificationData } from "../../hooks";

export const Notification = () => {
  const { isPresent, type, message, description } = useNotificationData();

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
