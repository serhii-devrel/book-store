// Core
import { useEffect, memo } from "react";

// Style
import { notification } from "antd";

// Hooks
import { useNotification } from "../../hooks";

export const Notification = memo(() => {
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
});
