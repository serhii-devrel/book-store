// Core
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const useNavigation = () => {
  const { pathname } = useLocation();

  const path = useMemo(
    () =>
      `/${pathname
        .split("/")
        .reduce((a, b) => (a.length > b.length ? a : b), 0)}`,
    [pathname]
  );

  return { path };
};
